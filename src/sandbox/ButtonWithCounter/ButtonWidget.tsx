import { JSX } from "react";
import Widget, { IWidgetViewProps } from "../../libs/Component/Widget";
import { ButtonWidgetState, IButtonWidgetState } from "./ButtonWidgetState";
import ButtonWidgetView from "./ButtonWidget.view";

export class ButtonWidget extends Widget<IButtonWidgetState, ButtonWidgetState> {
	constructor() {
		super({ state: new ButtonWidgetState() })
	}

	protected _mount(): void {
		this._state.subscribe('count', this.__logInfo.bind(this, '[COUNT]'))
	}

	protected _getWidget(props: IWidgetViewProps<IButtonWidgetState, ButtonWidgetState>): JSX.Element {
		return <ButtonWidgetView {...props} />
	}

	private __logInfo(prefix: string, value: number): void {
		console.log(`${prefix} ${value.toString()}`)
	}
}