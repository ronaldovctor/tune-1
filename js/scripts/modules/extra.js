class Extra {
    btn;
    box;
    constructor(btn, box) {
        this.btn = btn;
        this.box = box;
        this.init();
    }
    buttonState() {
        this.btn.addEventListener('click', () => {
            this.btn.classList.toggle('active');
            this.boxState();
        });
    }
    boxState() {
        this.box.classList.toggle('active');
        this.box.classList.length
            ? this.box.setAttribute('aria-hidden', 'false')
            : this.box.setAttribute('aria-hidden', 'true');
    }
    init() {
        this.buttonState();
    }
}
export default Extra;
//# sourceMappingURL=extra.js.map