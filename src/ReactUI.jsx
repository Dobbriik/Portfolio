import { useEffect, useState } from 'react'
import Component from './components/component'

export default function ReactUi() {
	const [theme, setTheme] = useState('white')

	useEffect(() => {
		const link = document.createElement('link')
		link.rel = 'stylesheet'
		link.href = `./src/styleColor/${theme}.css`

		document.head.appendChild(link)

		return () => {
			document.head.removeChild(link)
		}
	}, [theme])

	return (
		<>
			<p id='color-text'>Tap to move</p>
			<Component />
			<button
				onClick={() => {
					setTheme(() => (theme == 'white' ? 'black' : 'white'))
				}}
			>
				swap
			</button>
		</>
	)
}
