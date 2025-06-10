import { scaleFactor } from './constants'
import makeKaplayCfg from './kaplayCfg'

export default async function initGame() {
	const k = makeKaplayCfg()

	k.loadSprite('player', './sprites/player.png', {
		sliceX: 1,
		sliceY: 1,
		anims: {
			idle: { from: 0, to: 0 },
		},
	})
	k.loadSprite('home', './sprites/home.png')
	k.loadSprite('map', './sprites/map.png')

	k.scene('main', async () => {
		const mapData = await (await fetch('./sprites/map.json')).json()
		const layers = mapData.layers

		const map = k.add([k.sprite('map'), k.pos(0, 100), k.scale(scaleFactor)])

		const player = k.add([
			k.sprite('player', { anim: 'idle' }),
			k.pos(1000, 200),
			k.scale(scaleFactor),
			k.area({ shape: new k.Rect(k.vec2(-5, 0), 25, 60) }),
			k.anchor('center'),
			k.body(),
		])

		player.onUpdate(() => {
			k.camPos(player.pos)
		})

		for (const layer of layers) {
			if (layer.name === 'floorWall') {
				for (const boundary of layer.objects) {
					map.add([
						k.area({
							shape: new k.Rect(k.vec2(0), boundary.width, boundary.height),
						}),
						k.body({ isStatic: true }),
						k.pos(boundary.x, boundary.y),
						boundary.name,
					])
				}
			}
		}
	})

	k.onUpdate(() => {
		k.setCamPos()
	})
	k.setGravity(4000)
	k.go('main')
	// shader
}
