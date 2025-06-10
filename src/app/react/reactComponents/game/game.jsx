import style from './game.module.css'

function Game() {
	return (
		<div className={style.cont}>
			<canvas id='game' className={style.game}></canvas>
		</div>
	)
}

export default Game
