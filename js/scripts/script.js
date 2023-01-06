import data from '../data/data.js';
import Accordion from './modules/accordion.js';
import Extra from './modules/extra.js';
import Galery from './modules/galery.js';
import Slide from './modules/slide.js';
window.addEventListener('load', () => {
    const container = document.querySelector('[data-slide="slide"]');
    const slides = document.querySelectorAll('[data-slide="slide"] li');
    const prev = document.querySelector('[data-slide="prev"]');
    const next = document.querySelector('[data-slide="next"]');
    const thumb = document.querySelector('[data-slide="scroll-thumb"]');
    const title = document.querySelector('[data-slide="title"]');
    const desc = document.querySelectorAll('[data-slide="desc"]');
    const descBtn = document.querySelector('[data-slide="redirect"]');
    if (container && prev && next && slides && thumb && title && desc && descBtn) {
        const slide = new Slide(container, [...slides], prev, next, thumb, title, [...desc], descBtn, data);
    }
    window.addEventListener('scroll', stickyHeader);
    function stickyHeader() {
        const header = document.querySelector('header');
        window.scrollY > 0
            ? header.classList.add('sticky')
            : header.classList.remove('sticky');
    }
    stickyHeader();
    const btn = document.querySelector('[data-extra="button"]');
    const box = document.querySelector('[data-extra="infos"]');
    if (btn && box) {
        const extraPopup = new Extra(btn, box);
    }
    const accordionbtns = document.querySelectorAll('[data-accordion]');
    if (accordionbtns) {
        const accordion = new Accordion([...accordionbtns]);
    }
    const galeryImg = document.querySelector('[data-galery="galery"]');
    const imgs = document.querySelectorAll('[data-galery="img"]');
    if (galeryImg && imgs) {
        const galery = new Galery(galeryImg, [...imgs]);
    }
});
//# sourceMappingURL=script.js.map