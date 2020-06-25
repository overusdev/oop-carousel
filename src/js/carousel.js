export class CarouselFrame {
    constructor(settings, slides) {
        this._settings = settings;
        this._element = document.querySelector(this._settings.element);
        this._slides = this._element.children;
    }

    slidesStyles() {

        for (let index = 0; index < this._slides.length; index++) {
            const slide = this._slides[index];
            slide.style.width = '100%';
        }
        // const slides = this._slides;
        // slides.forEach(element => {
        //    console.log(element); 
        // });
    }

}

export class Carousel extends CarouselFrame {
    init() {
        this.slidesStyles();
    }
}





