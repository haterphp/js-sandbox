import { useWidgetRegister } from "../../libs/Component/useWidgetRegister";
import { IFormWidgetViewProps } from "../../widgets/FormWidget/FormWIdget";
import { IFormWidgetState } from "../../widgets/FormWidget/FormWidgetState";
import { ILoginFormFields } from "./LoginFormWidgetState";
import { useForm } from "../../widgets/FormWidget/hooks/useForm__web";

export default function LoginFormWidgetView(props: IFormWidgetViewProps<ILoginFormFields>) {
	useWidgetRegister<IFormWidgetState<ILoginFormFields>>(props)

	const { onSubmit: handleOnSubmit, register } = useForm<ILoginFormFields>(props)

	return (
		<form onSubmit={handleOnSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
			<input type="text" {...register('email')} />

			<input type="password" {...register('password')} />

			<label>
				<span>Is agree?</span>
				<input type="checkbox" {...register('isAgree')}/>
			</label>

			<button type="submit">Submit</button>
		</form>
	)
}