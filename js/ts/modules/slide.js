class Slide {
    container;
    slides;
    prevBtn;
    nextBtn;
    index;
    thumb;
    title;
    desc;
    data;
    constructor(container, slides, prev, next, thumb, title, desc, data) {
        this.container = container;
        this.slides = slides;
        this.prevBtn = prev;
        this.nextBtn = next;
        this.index = 0;
        this.thumb = thumb;
        this.title = title;
        this.desc = desc;
        this.data = data;
        console.log(this.data);
        this.init();
    }
    next() {
        this.changePos(+1);
    }
    prev() {
        this.changePos(-1);
    }
    changePos(direction) {
        const currentIndex = this.index + direction;
        if (currentIndex < this.slides.length && currentIndex >= 0) {
            this.index += direction;
            this.container.style.transform = `translate3d(0, -${this.slides[this.index].offsetTop}px, 0)`;
        }
        console.log('change');
        this.checkIndex(this.index);
        this.moveThumb(this.index);
        this.changeDescAndTitle(this.index);
    }
    checkIndex(index) {
        if (index == 0)
            this.prevBtn.classList.add('off');
        else
            this.prevBtn.classList.remove('off');
        if (index == this.slides.length - 1)
            this.nextBtn.classList.add('off');
        else
            this.nextBtn.classList.remove('off');
    }
    createThumb() {
        const scroll = this.thumb.parentElement;
        const thumbHeight = scroll.offsetHeight / this.slides.length;
        this.thumb.style.height = `${thumbHeight}px`;
    }
    moveThumb(index) {
        const distance = this.thumb.offsetHeight;
        this.thumb.style.top = `${distance * index}px`;
    }
    changeDescAndTitle(index) {
        console.log('psss');
        const { name, stats, price } = this.data[index];
        this.desc[0].innerText = stats.power;
        this.desc[1].innerText = stats.acceleration;
        this.desc[2].innerText = stats.speed;
    }
    bindThis() {
        this.prev = this.prev.bind(this);
        this.next = this.next.bind(this);
    }
    init() {
        this.bindThis();
        this.nextBtn.addEventListener('click', this.next);
        this.prevBtn.addEventListener('click', this.prev);
        this.checkIndex(this.index);
        this.createThumb();
        this.changeDescAndTitle(this.index);
    }
}
export default Slide;
//# sourceMappingURL=slide.js.map