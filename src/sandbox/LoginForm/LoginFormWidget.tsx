import { JSX } from "react";
import { FormWidget, IFormWidgetViewProps } from "../../widgets/FormWidget/FormWIdget";
import { FormWidgetState } from "../../widgets/FormWidget/FormWidgetState";
import { ILoginFormFields } from "./LoginFormWidgetState";
import LoginFormWidgetView from "./LoginFormWidget.view";

export class LoginFormWidget extends FormWidget<ILoginFormFields> {
	constructor() {
		const formFields: ILoginFormFields = { email: 'test@mail.ru', password: '', isAgree: false }
		super({ state: new FormWidgetState({ formFields }) })
	}

	protected _mount(): void {
		// setTimeout(this._state.updateFormField.bind(this._state), 2000, 'password', 'test-password')
	}

	protected _onSubmit(): void {
		console.log(this._state.getFormFields())
	}

	protected _getWidget(props: IFormWidgetViewProps<ILoginFormFields>): JSX.Element {
		return <LoginFormWidgetView {...props} />
	}
}