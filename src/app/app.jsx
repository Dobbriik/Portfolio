import { Routes, Route } from 'react-router-dom'
import ReactUi from './react/ReactUI'
import Skills from './react/reactComponents/skills/skills'
import Arts from './react/reactComponents/arts/arts'

function App() {
	return (
		<Routes>
			<Route path='/' element={<ReactUi />}>
				<Route path='/open' element={<Skills />} />
				<Route path='/arts' element={<Arts />} />
			</Route>
		</Routes>
	)
}

export default App
