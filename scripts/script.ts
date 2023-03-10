import data from '../data/data.js'
import Accordion from './modules/accordion.js'
import Extra from './modules/extra.js'
import Form from './modules/form.js'
import Galery from './modules/galery.js'
import Slide from './modules/slide.js'

window.addEventListener('load', () => {
	const container = document.querySelector<HTMLElement>('[data-slide="slide"]')
	const slides = document.querySelectorAll<HTMLElement>('[data-slide="slide"] li')
	const prev = document.querySelector<HTMLElement>('[data-slide="prev"]')
	const next = document.querySelector<HTMLElement>('[data-slide="next"]')
	const thumb = document.querySelector<HTMLElement>('[data-slide="scroll-thumb"]')
	const title = document.querySelector<HTMLElement>('[data-slide="title"]')
	const desc = document.querySelectorAll<HTMLElement>('[data-slide="desc"]')
	const descBtn = document.querySelector<HTMLAnchorElement>('[data-slide="redirect"]')

	if (container && prev && next && slides && thumb && title && desc && descBtn) {
		const slide = new Slide(
			container,
			[...slides],
			prev,
			next,
			thumb,
			title,
			[...desc],
			descBtn,
			data
		)
	}

	// Header
	window.addEventListener('scroll', stickyHeader)
	function stickyHeader() {
		const header = document.querySelector<HTMLElement>('header')
		window.scrollY > 0
			? header!.classList.add('sticky')
			: header!.classList.remove('sticky')
	}
	stickyHeader()

	// Extras
	const btn = document.querySelector<HTMLElement>('[data-extra="button"]')
	const content = document.querySelector<HTMLElement>('[data-extra="infos"]')

	if (btn && content) {
		const extraPopup = new Extra(btn, content)
	}

	// Accordion
	const accordionbtns = document.querySelectorAll<HTMLElement>('[data-accordion]')

	if (accordionbtns) {
		const accordion = new Accordion([...accordionbtns])
	}

	// Galery
	const galeryImg = document.querySelector<HTMLElement>('[data-galery="galery"]')
	const imgs = document.querySelectorAll<HTMLElement>('[data-galery="img"]')

	if (galeryImg && imgs) {
		const galery = new Galery(galeryImg, [...imgs])
	}

	// Form
	const form = new Form()
	const url = window.location.search
	const params = new URLSearchParams(url)
	const section = params.get('form') && document.querySelector(`#${params.get('form')}`)
	const prod = params.get('prod')
	if (section && prod) {
		section.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		})
		document.querySelector(`#${prod}`)?.setAttribute('checked', 'checked')
	}
})
