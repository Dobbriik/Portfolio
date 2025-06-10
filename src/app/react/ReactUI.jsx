import { Outlet } from 'react-router-dom'
import About from './reactComponents/about/about'
import Container from './reactComponents/container/conteiner'
import Game from './reactComponents/game/game'
import Menu from './reactComponents/menu/menu'
import Popup from './reactComponents/popup/popup'

export default function ReactUi() {
	return (
		<>
			<Container>
				<Popup>
					<Outlet />
				</Popup>
				<Menu />
				<About />
				<Game />
			</Container>
		</>
	)
}
