import { useEffect, useState } from 'react'
import { SunMoon, Sun } from 'lucide-react'
import style from './menu.module.css'
import { Link } from 'react-router-dom'

function Menu() {
	if (!localStorage.getItem('colorInfo')) {
		localStorage.setItem('colorInfo', 'white')
	}

	const [theme, setTheme] = useState(localStorage.getItem('colorInfo'))

	const handleClick = () => {
		setTheme(() => {
			if (theme == 'white') {
				localStorage.setItem('colorInfo', 'black')
				return 'black'
			}
			localStorage.setItem('colorInfo', 'white')
			return 'white'
		})
	}

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
			<button className={`background1 ${style.btn}`} onClick={handleClick}>
				{theme == 'white' ? (
					<SunMoon className='icon' />
				) : (
					<Sun className='icon' />
				)}
			</button>
			<Link to='/open'>{'open'}</Link>
			<Link to='/arts'>{'arts'}</Link>
		</div>
	)
}

export default Menu
