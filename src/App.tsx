import { useMemo } from 'react'
import './App.css'
import { ButtonWidget } from './sandbox/ButtonWithCounter/ButtonWidget'
import { LoginFormWidget } from './sandbox/LoginForm/LoginFormWidget'

function App() {
	const buttonWidget = useMemo(() => new ButtonWidget(), [])

	return (
		<>
			{buttonWidget.render()}
			{buttonWidget.render()}
		</>
	)
}

export default App
