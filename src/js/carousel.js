export class CarouselFrame {
    constructor(settings) {
        this._settings = settings;
        this._element = document.querySelector(this._settings.element);
        this._slides = [].slice.call(this._element.children);
        this._slidesWrapper = document.createElement('div');
        this._slidesInner = document.createElement('div');
    }

    addWrapper() {
        this._slidesWrapper.className = 'carousel';
        this._slidesInner.className = 'carousel__inner';
        this._element.appendChild(this._slidesWrapper);
    }

    slidesStyles() {
        const slides = this._slides;
        const wrapper = this._slidesWrapper;
        const inner = this._slidesInner;

        slides.forEach(function (item) {
            wrapper.appendChild(inner);
            inner.appendChild(item);
            item.classList.add('carousel__img');
        });
    }

}

export class Carousel extends CarouselFrame {
    init() {
        // console.log(this);
        this.addWrapper();
        this.slidesStyles();

    }
}





