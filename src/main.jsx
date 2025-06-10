import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import initGame from './app/kaplay/initGame.js'
import ReactUi from './app/react/ReactUI.jsx'
import { BrowserRouter } from 'react-router-dom'
import App from './app/app.jsx'

const root = createRoot(document.getElementById('ui'))
root.render(
	<StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</StrictMode>
)

setTimeout(() => {
	initGame('main')
}, 1)
