import data from '../data/data.js'
import Accordion from './modules/accordion.js'
import Extra from './modules/extra.js'
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

	window.addEventListener('scroll', stickyHeader)
	function stickyHeader() {
		const header = document.querySelector<HTMLElement>('header')
		window.scrollY > 0
			? header!.classList.add('sticky')
			: header!.classList.remove('sticky')
	}
	stickyHeader()

	const btn = document.querySelector<HTMLElement>('[data-extra="button"]')
	const box = document.querySelector<HTMLElement>('[data-extra="infos"]')

	if (btn && box) {
		const extraPopup = new Extra(btn, box)
	}

	const accordionbtns = document.querySelectorAll<HTMLElement>('[data-accordion]')
	if (accordionbtns) {
		const accordion = new Accordion([...accordionbtns])
	}
})
