import { useEffect } from "react";
import { AbstarctState } from "../State/AbstractState";
import { IWidgetViewProps } from "./Widget";

export const useWidgetRegister = <
	TStateObject extends object = object,
	TState extends AbstarctState<TStateObject> = AbstarctState<TStateObject>,
	TWidgetViewProps extends IWidgetViewProps<TStateObject, TState> = IWidgetViewProps<TStateObject, TState>
>(props: TWidgetViewProps) => {
	useEffect(() => {
		props.mount()
		return () => props.umount()
	}, [])
}