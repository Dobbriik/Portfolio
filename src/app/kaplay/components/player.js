export default function makePlayer(k, posVec2, speed) {
	const player = k.add([
		k.sprite('player', { anim: 'idle' }),
		k.scale(8),
		k.anchor('center'),
		k.area({ shape: new k.Rect(k.vec2(0)) }),
	])
}
