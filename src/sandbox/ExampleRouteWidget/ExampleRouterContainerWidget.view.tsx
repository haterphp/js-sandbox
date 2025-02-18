import { useWidgetRegister } from "../../libs/Component/useWidgetRegister";
import { IExampleRouterContainerWidgetViewProps } from "./ExampleRouterContainerWidget";

export default function ExampleRouterContainerWidgetView(props: IExampleRouterContainerWidgetViewProps) {
	useWidgetRegister(props)

	const { renderRouter, updateRouteId } = props

	return (
		<div>
			<button onClick={() => updateRouteId('button')}>Button</button>
			<button onClick={() => updateRouteId('form')}>Form</button>

			<div style={{ marginTop: '20px' }}>
				{renderRouter()}
			</div>
		</div>
	)
}