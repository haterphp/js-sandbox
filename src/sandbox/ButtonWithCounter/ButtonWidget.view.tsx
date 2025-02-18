import { useWidgetRegister } from "../../libs/Component/useWidgetRegister"
import { IWidgetViewProps } from "../../libs/Component/Widget"
import { useSyncState } from "../../libs/State/useSyncState"
import { ButtonWidgetState, IButtonWidgetState } from "./ButtonWidgetState"

type IButtonWidgetViewProps = IWidgetViewProps<IButtonWidgetState, ButtonWidgetState>

export default function ButtonWidgetView(props: IButtonWidgetViewProps) {
	useWidgetRegister<IButtonWidgetState>(props)

	const getStateValue = useSyncState<IButtonWidgetState>(props.state)
	const count = getStateValue('count')

	return (
		<button onClick={props.state.incrementCount.bind(props.state)}>
			Count is {count}
		</button>
	)
}