import { useEffect } from "react";
import { Mountable } from "../Mountable/Mountable";

export const useWidgetRegister = (props: Mountable) => {
	useEffect(() => {
		props.mount()
		return () => props.unmount()
	}, [])
}