import Widget from "../../libs/Component/Widget"
import { AbstarctState } from "../../libs/State/AbstractState"

export type RouteID = string | number

export class Route<
	TStateObject extends object = any,
	TState extends AbstarctState<TStateObject> = AbstarctState<TStateObject>,
	TWidget extends Widget<TStateObject, TState> = Widget<TStateObject, TState>
> {
	private __routeId: RouteID

	private __widget: TWidget

	public get routeId(): RouteID {
		return this.__routeId
	}

	public get widget(): TWidget {
		return this.__widget
	}

	private constructor(routeId: RouteID, widget: TWidget) {
		this.__routeId = routeId
		this.__widget = widget
	}

	public static new<
		TStateObject extends object = any,
		TState extends AbstarctState<TStateObject> = AbstarctState<TStateObject>,
		TWidget extends Widget<TStateObject, TState> = Widget<TStateObject, TState>
	>(routeId: string, widget: TWidget): Route<TStateObject, TState, TWidget> {
		return new Route(routeId, widget)
	}
}