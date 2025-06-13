import { useEffect, useState } from 'react'
import style from './popup.module.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { X } from 'lucide-react'

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
			const backgroundElement = document.getElementById('popupContainer')
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
		<div className={`popup-wrap ${open ? style.wrap : style.close}`}>
			<div id='popupContainer' className={`background2 ${style.cont}`}>
				<X
					className={` ${style.btn}`}
					onClick={() => {
						isOpen(false)
					}}
				/>

				{children}
			</div>
		</div>
	)
}

export default Popup
