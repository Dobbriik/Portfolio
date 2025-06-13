const viewportWidth = document.documentElement.clientWidth
let scaleFactor = 3
if (viewportWidth < 550) {
	scaleFactor = 2
}

export { scaleFactor }
