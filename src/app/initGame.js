import makeKaplayCfg from './kaplayCfg'

export default async function initGame() {
	const k = makeKaplayCfg()

	k.loadSprite('player', './sprites/player.png', {
		sliceX: 1,
		sliceY: 1,
		anim: {},
	})
	k.loadSprite('home', './sprites/home.png')
	k.loadSprite('map', './sprites/map.png')

	// k.setBackground(k.color.fromHex('#311047'))

	// k.scene('main', async () => {
	// 	const mapData = await (await fetch('./sprites/map.json')).json()
	// 	console.log(mapData)
	// })

	k.go()
}
