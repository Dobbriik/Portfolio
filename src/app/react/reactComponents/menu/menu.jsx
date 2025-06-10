import { useEffect, useState } from 'react'
import { SunMoon, Sun } from 'lucide-react'
import style from './menu.module.css'
import { Link } from 'react-router-dom'

function Menu() {
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
		<div className={style.cont}>
			<button
				id='background1'
				className={style.btn}
				onClick={() => {
					setTheme(() => (theme == 'white' ? 'black' : 'white'))
				}}
			>
				{theme == 'white' ? <SunMoon id='icon' /> : <Sun id='icon' />}
			</button>
			<Link to='/open'>{'open'}</Link>
		</div>
	)
}

export default Menu
