import kaplay from 'kaplay'

export default function makeKaplayCfg() {
	return kaplay({
		global: false,
		pixelDensity: 2,
		touchToMouse: true,
		debug: true,
		debugKey: 'f4',
		canvas: document.getElementById('game'),
	})
}
