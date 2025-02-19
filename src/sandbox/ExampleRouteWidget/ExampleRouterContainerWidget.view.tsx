import { useWidgetRegister } from "../../libs/Component/useWidgetRegister";
import { IExampleRouterContainerWidgetViewProps } from "./ExampleRouterContainerWidget";

export default function ExampleRouterContainerWidgetView(props: IExampleRouterContainerWidgetViewProps) {
	useWidgetRegister(props)
	const { router } = props

	return (
		<div>
			<button onClick={router.updateRouteId.bind(router, 'button')}>Button</button>
			<button onClick={router.updateRouteId.bind(router, 'form')}>Form</button>

			<div style={{ marginTop: '20px' }}>
				{router.render()}
			</div>
		</div>
	)
}