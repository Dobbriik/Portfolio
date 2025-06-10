import { Routes, Route } from 'react-router-dom'
import ReactUi from './react/ReactUI'
import Skills from './react/reactComponents/skills/skills'

function App() {
	return (
		<Routes>
			<Route path='/' element={<ReactUi />}>
				<Route path='/open' element={<Skills />} />
			</Route>
		</Routes>
	)
}

export default App
