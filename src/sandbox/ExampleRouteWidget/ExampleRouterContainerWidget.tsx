import { JSX } from "react";
import Widget, { IWidgetViewProps } from "../../libs/Component/Widget";
import { AbstarctState } from "../../libs/State/AbstractState";
import ExampleRouterContainerWidgetView from "./ExampleRouterContainerWidget.view";
import { RouterWidget } from "../../widgets/RouterWidget/RouterWidget";
import { ExampleRouteWidgetState } from "./Router/ExampleRouteWidgetState";
import { Route } from "../../widgets/RouterWidget/Route";

export interface IExampleRouterContainerWidgetViewProps extends IWidgetViewProps<{}, ExampleRouterContainerWidgetState> {
	router: RouterWidget
}

export class ExampleRouterContainerWidgetState extends AbstarctState<{}> {}

export class ExampleRouterContainerWidget extends Widget<{}, ExampleRouterContainerWidgetState> {
	private __router: RouterWidget

	private __routeOnChangedUnsubscribeCallback: (() => void) | null

	constructor() {
		super({ state: new ExampleRouterContainerWidgetState({}) })

		this.__router = new RouterWidget({ state: new ExampleRouteWidgetState() })
		this.__routeOnChangedUnsubscribeCallback = null
	}

	protected _mount(): void {
		this.__routeOnChangedUnsubscribeCallback = this.__router.onRouteChanged(this.__onRouteChanged.bind(this))
	}

	protected _unmount(): void {
		this.__routeOnChangedUnsubscribeCallback?.()
	}

	protected _getWidget(props: IExampleRouterContainerWidgetViewProps): JSX.Element {
		return <ExampleRouterContainerWidgetView {...props} />
	}

	protected _getWidgetViewProps(): IExampleRouterContainerWidgetViewProps {
		return {
			...super._getWidgetViewProps(),
			router: this.__router,
		}
	}

	private __onRouteChanged(route: Route): void {
		console.log(route)
	}
}