import debounce from './debounce.js';
class Accordion {
    controls;
    constructor(controls) {
        this.controls = controls;
        this.addListener();
    }
    addListener() {
        this.controls.forEach((control) => {
            control.addEventListener('click', this.toggleAccordion);
        });
    }
    toggleAccordion(event) {
        const target = event.target;
        const id = target.getAttribute('data-accordion');
        const box = document.getElementById(id);
        const textHeight = target.parentElement?.nextElementSibling?.children[0].clientHeight;
        if (box.classList.contains('active')) {
            box.classList.remove('active');
            box.style.height = `${50}px`;
        }
        else {
            box?.classList.add('active');
            box.style.height = `${textHeight + 80}px`;
        }
        window.addEventListener('resize', debounce(function () {
            box.classList.remove('active');
            box.style.height = `${50}px`;
        }, 300));
    }
}
export default Accordion;
//# sourceMappingURL=accordion.js.map