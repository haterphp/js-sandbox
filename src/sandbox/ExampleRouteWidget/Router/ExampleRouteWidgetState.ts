import { IFormWidgetState } from "../../../widgets/FormWidget/FormWidgetState";
import { Route } from "../../../widgets/RouterWidget/Route";
import { RouterWidgetState } from "../../../widgets/RouterWidget/RouterWidgetState";
import { ButtonWidget } from "../../ButtonWithCounter/ButtonWidget";
import { IButtonWidgetState } from "../../ButtonWithCounter/ButtonWidgetState";
import { LoginFormWidget } from "../../LoginForm/LoginFormWidget";
import { ILoginFormFields } from "../../LoginForm/LoginFormWidgetState";

export class ExampleRouteWidgetState extends RouterWidgetState {
	constructor() {
		super({ routes: ExampleRouteWidgetState.getRoutes() })
	}

	protected static getRoutes(): Route[] {
		return [
			Route.new<IButtonWidgetState>('button', () => new ButtonWidget()),
			Route.new<IFormWidgetState<ILoginFormFields>>('form', () => new LoginFormWidget()),
		]
	}
}