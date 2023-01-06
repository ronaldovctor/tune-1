class Galery {
    galery;
    images;
    constructor(galery, images) {
        this.galery = galery;
        this.images = images;
        this.init();
    }
    changeImg(event) {
        const img = event.currentTarget;
        this.galery.prepend(img);
        console.log('dsdsdd');
    }
    addListener() {
        this.images.forEach((img) => {
            img.addEventListener('click', this.changeImg);
        });
    }
    bindThis() {
        this.changeImg = this.changeImg.bind(this);
    }
    init() {
        this.bindThis();
        this.addListener();
    }
}
export default Galery;
//# sourceMappingURL=galery.js.map