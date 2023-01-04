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
        const box = target.getAttribute('data-accordion');
        document.getElementById(box)?.classList.toggle('active');
    }
}
export default Accordion;
//# sourceMappingURL=accordion.js.map