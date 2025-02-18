import { AbstarctState } from "../../libs/State/AbstractState";

export interface IButtonWidgetState {
	count: number
	test: string[]
}

export class ButtonWidgetState extends AbstarctState<IButtonWidgetState> {
	constructor() {
		super({ count: 0, test: ['123', '456'] })
	}

	public incrementCount(): void {
		this.updateStateObject('count', (count) => count + 1)
	}
}