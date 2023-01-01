import data from '../data/data.js';
import Slide from './modules/slide.js';
window.addEventListener('load', () => {
    const container = document.querySelector('[data-slide="slide"]');
    const slides = document.querySelectorAll('[data-slide="slide"] li');
    const prev = document.querySelector('[data-slide="prev"]');
    const next = document.querySelector('[data-slide="next"]');
    const thumb = document.querySelector('[data-slide="scroll-thumb"]');
    const title = document.querySelector('[data-slide="title"]');
    const desc = document.querySelectorAll('[data-slide="desc"]');
    if (container && prev && next && slides && thumb && title && desc) {
        const slide = new Slide(container, [...slides], prev, next, thumb, title, [...desc], data);
    }
});
//# sourceMappingURL=script.js.map