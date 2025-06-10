import { useEffect, useState } from 'react'
import style from './popup.module.css'
import { useLocation, useNavigate } from 'react-router-dom'

function Popup({ children }) {
	const navigate = useNavigate()
	const [open, isOpen] = useState(false)
	const location = useLocation()
	useEffect(() => {
		if (location.pathname != '/') {
			isOpen(true)
		} else {
			isOpen(false)
		}

		const handleClickOutside = event => {
			const backgroundElement = document.getElementById('background1')
			if (backgroundElement && !backgroundElement.contains(event.target)) {
				navigate('/')
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [navigate])

	return (
		<div id='popup' className={open ? style.wrap : style.close}>
			<div className={style.cont} id='background1'>
				{children}
			</div>
		</div>
	)
}

export default Popup
