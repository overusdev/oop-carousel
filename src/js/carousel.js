export class CarouselFrame {
    constructor(settings) {
        this._settings = settings;
        this._element = document.querySelector(this._settings.element);
        this._slides = this._element.children;
    }

    slidesStyles() {
        const slides = this._slides;
        Object.keys(slides).forEach(index => {
            const elements = slides[index];
            elements.style.width = '100%';
        });
    }

}

export class Carousel extends CarouselFrame {
    init() {
        console.log(this);
        this.slidesStyles();
    }
}





