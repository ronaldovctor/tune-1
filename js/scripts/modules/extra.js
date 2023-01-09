class Extra {
    btn;
    content;
    box;
    direction;
    constructor(btn, content) {
        this.btn = btn;
        this.content = content;
        this.box = document.querySelector('[data-extra^="component"]');
        this.direction = null;
        this.init();
    }
    buttonState() {
        this.btn.addEventListener('click', () => {
            this.btn.classList.toggle('active');
            this.btn.classList.toggle('paused');
            this.boxState();
        });
    }
    boxState() {
        this.content.classList.toggle('active');
        this.content.classList.length
            ? this.content.setAttribute('aria-hidden', 'false')
            : this.content.setAttribute('aria-hidden', 'true');
    }
    stylingDirection() {
        if (this.box) {
            this.direction = this.box.getAttribute('data-extra').split(',')[1];
            console.log(this.direction);
            this.box.style.flexDirection = this.direction;
        }
    }
    init() {
        this.stylingDirection();
        this.buttonState();
    }
}
export default Extra;
//# sourceMappingURL=extra.js.map