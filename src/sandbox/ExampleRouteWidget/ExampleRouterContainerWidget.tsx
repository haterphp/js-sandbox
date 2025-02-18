import { JSX } from "react";
import Widget, { IWidgetViewProps } from "../../libs/Component/Widget";
import { AbstarctState } from "../../libs/State/AbstractState";
import ExampleRouterContainerWidgetView from "./ExampleRouterContainerWidget.view";
import { RouterWidget } from "../../widgets/RouterWidget/RouterWidget";
import { ExampleRouteWidgetState } from "./Router/ExampleRouteWidgetState";
import { Route, RouteID } from "../../widgets/RouterWidget/Route";

export interface IExampleRouterContainerWidgetViewProps extends IWidgetViewProps<{}, ExampleRouterContainerWidgetState> {
	renderRouter: () => JSX.Element | null
	updateRouteId: (routeId: RouteID) => void
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
			renderRouter: this.__router.render.bind(this.__router),
			updateRouteId: this.__router.updateRouteId.bind(this.__router)
		}
	}

	private __onRouteChanged(route: Route): void {
		console.log(route)
	}
}