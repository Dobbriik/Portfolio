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
			k.area({ shape: new k.Rect(k.vec2(0, 0), 25, 60) }),
			k.anchor('center'),
			k.body(),
			{
				speed: 400,
				isMoving: false,
				moveDirection: 0, // -1 = влево, 1 = вправо
			},
		])

		player.onUpdate(() => {
			k.setCamPos(player.pos)

			if (player.isMoving) {
				player.pos.x += player.moveDirection * player.speed * k.dt()
			}
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
			if (layer.name === 'skills') {
				for (const boundary of layer.objects) {
					map.add([
						k.area({
							shape: new k.Rect(k.vec2(0), boundary.width, boundary.height),
						}),
						k.pos(boundary.x, boundary.y),
						boundary.name,
					])

					if (boundary.name) {
						player.onCollide(boundary.name, () => {
							console.log('skills')
						})
					}
				}
			}

			if (layer.name === 'arts') {
				player.onCollide(layer.name, () => {
					console.log('arts')
				})
			}
		}
		k.onMouseDown(() => {
			player.isMoving = true
			player.moveDirection = k.mousePos().x > k.width() / 2 ? 1 : -1
		})

		k.onMouseRelease(() => {
			player.isMoving = false
		})
	})

	k.onUpdate(() => {
		k.setCamPos()
	})
	k.setGravity(4000)
	k.go('main')
	// shader
}
