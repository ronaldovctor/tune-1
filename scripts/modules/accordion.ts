class Accordion {
	private controls

	constructor(controls: HTMLElement[]) {
		this.controls = controls
		this.addListener()
	}

	addListener() {
		this.controls.forEach((control) => {
			control.addEventListener('click', this.toggleAccordion)
		})
	}

	toggleAccordion(event: Event) {
		const target = event.target as HTMLElement
		const box = target.getAttribute('data-accordion')
		document.getElementById(box!)?.classList.toggle('active')
	}
}

export default Accordion
