import './App.css'
import { ExampleRouterContainerWidget } from './sandbox/ExampleRouteWidget/ExampleRouterContainerWidget'

function App() {

	return (
		<>
			{new ExampleRouterContainerWidget().render()}
		</>
	)
}

export default App
