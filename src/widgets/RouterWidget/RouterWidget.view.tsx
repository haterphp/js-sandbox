import { JSX, useMemo } from "react";
import { IRouterWidgetState, RouterWidgetState } from "./RouterWidgetState";
import { useWidgetRegister } from "../../libs/Component/useWidgetRegister";
import { IWidgetViewProps } from "../../libs/Component/Widget";
import { useSyncState } from "../../libs/State/useSyncState";

export interface IRouterWidgetViewProps extends IWidgetViewProps<IRouterWidgetState, RouterWidgetState> {}

export default function RouteWidgetView(props: IRouterWidgetViewProps): JSX.Element | null {
	useWidgetRegister(props)

	const currentRoute = useSyncState<IRouterWidgetState>(props.state)('currentRoute')
	const widget = useMemo(() => currentRoute.widget, [currentRoute])

	return widget.render()
}