class Galery {
	private galery
	private images

	constructor(galery: HTMLElement, images: HTMLElement[]) {
		this.galery = galery
		this.images = images
		this.init()
	}

	changeImg(event: Event) {
		const img = event.currentTarget as HTMLElement
		this.galery.prepend(img)
		console.log('dsdsdd')
	}

	addListener() {
		this.images.forEach((img) => {
			img.addEventListener('click', this.changeImg)
		})
	}

	bindThis() {
		this.changeImg = this.changeImg.bind(this)
	}

	init() {
		this.bindThis()
		this.addListener()
	}
}

export default Galery
