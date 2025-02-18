import { JSX } from "react";
import { AbstarctState } from "../State/AbstractState";
import { Mountable } from "../Mountable/Mountable";

export interface IWidgetViewProps<TStateObject extends object, TState extends AbstarctState<TStateObject>> extends Mountable {
	state: TState
}

interface IWidgetCreatePayload<
	TStateObject extends object,
	TState extends AbstarctState<TStateObject>
> {
	state: TState
}

export default abstract class Widget<
	TStateObject extends object,
	TState extends AbstarctState<TStateObject>,
	TWidgetViewProps extends IWidgetViewProps<TStateObject, TState> = IWidgetViewProps<TStateObject, TState>
> {
	protected _state: TState

	constructor(payload: IWidgetCreatePayload<TStateObject, TState>) {
		this._state = payload.state
	}

	public render(): JSX.Element | null {
		const props = this._getWidgetViewProps()
		return this._getWidget(props)
	}

	protected _mount(): void {}

	protected _unmount(): void {}

	private __componentMount(): void {
		this._state.mount()
		this._mount()
	}

	private __componentUnmount(): void {
		this._state.unmount()
		this._unmount()
		this._state.removeAllObservers()
	}

	protected _getWidgetViewProps(): TWidgetViewProps {
		return {
			state: this._state,
			mount: this.__componentMount.bind(this),
			unmount: this.__componentUnmount.bind(this)
		} as TWidgetViewProps
	}

	protected abstract _getWidget(props: TWidgetViewProps): JSX.Element
}