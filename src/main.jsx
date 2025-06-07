import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import initGame from './app/initGame.js'
import ReactUi from './ReactUI'

const ui = document.getElementById('ui')
const root = createRoot(ui)
root.render(
	<StrictMode>
		<ReactUi />
	</StrictMode>
)

// initGame()
