(function () {

    const pricingSlides = [
        `<div class="slider-item active">
            <h3 class="item-pricing__tittle">Advanced barista course111</h3>
            <div class="carousel-item__price">
                <p class="item-pricing__price">$350 | 14 days</p>
            </div>
            <div class="check-mark">
                <img width="20" src="img/done.svg" class="" alt="icon">
                <span class="check-mark__text">For profesionals;</span>
            </div>
            <div class="check-mark">
                <img width="20" src="img/done.svg" class="" alt="icon">
                <span class="check-mark__text">Online and offline;</span>
            </div>
            <div class="check-mark">
                <img width="20" src="img/done.svg" class="" alt="icon">
                <span class="check-mark__text">Professional equipment;</span>
            </div>
            <div class="check-mark">
                <img width="20" src="img/done.svg" class="" alt="icon">
                <span class="check-mark__text">Coffe roasting details;</span>
            </div>
            <div class="check-mark">
                <img width="20" src="img/done.svg" class="" alt="icon">
                <span class="check-mark__text">Alternative brewing.</span>
            </div>
            <div class="carousel-inner__button">
                <a href="#contacts" class="carousel__btn-select button">Select Cource</a>
            </div>
        </div>`,
        `<div class="slider-item">
            <h3 class="item-pricing__tittle">Advanced barista course222</h3>
            <div class="carousel-item__price">
                <p class="item-pricing__price">$350 | 14 days</p>
            </div>
            <div class="check-mark">
                <img width="20" src="img/done.svg" class="" alt="icon">
                <span class="check-mark__text">For profesionals;</span>
            </div>
            <div class="check-mark">
                <img width="20" src="img/done.svg" class="" alt="icon">
                <span class="check-mark__text">Online and offline;</span>
            </div>
            <div class="check-mark">
                <img width="20" src="img/done.svg" class="" alt="icon">
                <span class="check-mark__text">Professional equipment;</span>
            </div>
            <div class="check-mark">
                <img width="20" src="img/done.svg" class="" alt="icon">
                <span class="check-mark__text">Coffe roasting details;</span>
            </div>
            <div class="check-mark">
                <img width="20" src="img/done.svg" class="" alt="icon">
                <span class="check-mark__text">Alternative brewing.</span>
            </div>
            <div class="carousel-inner__button">
                <a href="#contacts" class="carousel__btn-select button">Select Cource</a>
            </div>
        </div>`,
        `<div class="slider-item">
            <h3 class="item-pricing__tittle">Advanced barista course333</h3>
            <div class="carousel-item__price">
                <p class="item-pricing__price">$350 | 14 days</p>
            </div>
            <div class="check-mark">
                <img width="20" src="img/done.svg" class="" alt="icon">
                <span class="check-mark__text">For profesionals;</span>
            </div>
            <div class="check-mark">
                <img width="20" src="img/done.svg" class="" alt="icon">
                <span class="check-mark__text">Online and offline;</span>
            </div>
            <div class="check-mark">
                <img width="20" src="img/done.svg" class="" alt="icon">
                <span class="check-mark__text">Professional equipment;</span>
            </div>
            <div class="check-mark">
                <img width="20" src="img/done.svg" class="" alt="icon">
                <span class="check-mark__text">Coffe roasting details;</span>
            </div>
            <div class="check-mark">
                <img width="20" src="img/done.svg" class="" alt="icon">
                <span class="check-mark__text">Alternative brewing.</span>
            </div>
            <div class="carousel-inner__button">
                <a href="#contacts" class="carousel__btn-select button">Select Cource</a>
            </div>
        </div>`,
        `<div class="slider-item">
            <h3 class="item-pricing__tittle">Advanced barista course444</h3>
            <div class="carousel-item__price">
                <p class="item-pricing__price">$350 | 14 days</p>
            </div>
            <div class="check-mark">
                <img width="20" src="img/done.svg" class="" alt="icon">
                <span class="check-mark__text">For profesionals;</span>
            </div>
            <div class="check-mark">
                <img width="20" src="img/done.svg" class="" alt="icon">
                <span class="check-mark__text">Online and offline;</span>
            </div>
            <div class="check-mark">
                <img width="20" src="img/done.svg" class="" alt="icon">
                <span class="check-mark__text">Professional equipment;</span>
            </div>
            <div class="check-mark">
                <img width="20" src="img/done.svg" class="" alt="icon">
                <span class="check-mark__text">Coffe roasting details;</span>
            </div>
            <div class="check-mark">
                <img width="20" src="img/done.svg" class="" alt="icon">
                <span class="check-mark__text">Alternative brewing.</span>
            </div>
            <div class="carousel-inner__button">
                <a href="#contacts" class="carousel__btn-select button">Select Cource</a>
            </div>
        </div>`,   

    ];

    let currentSlideIdx = 0;

    function renderSlides() {
        const slideContainer = document.querySelector('.pricing__slide-container');
        slideContainer.innerHTML =  pricingSlides[currentSlideIdx];
        if (window.innerWidth >= 767) {
            const secondSlideIdx = currentSlideIdx + 1 >= pricingSlides.length ? 0 : currentSlideIdx + 1;
            slideContainer.innerHTML += pricingSlides[secondSlideIdx];
            if (window.innerWidth >= 991) {
                const thirdSlideIdx = secondSlideIdx + 1 >= pricingSlides.length ? 0 : secondSlideIdx + 1;
                slideContainer.innerHTML += pricingSlides[thirdSlideIdx];
            }
        }
    }

    function nextSlide() {
        currentSlideIdx = currentSlideIdx + 1 >= pricingSlides.length ? 0 : currentSlideIdx + 1;
        renderSlides();
    }

    // setInterval(nextSlide, 3000);

    renderSlides();

    const btnNext = document.querySelector('.slick-next');
    btnNext.addEventListener('click', nextSlide);

    const btnPrev = document.querySelector('.slick-prev');
    btnPrev.addEventListener('click', () => {
        currentSlideIdx = currentSlideIdx - 1 < 0 ? pricingSlides.length - 1 : currentSlideIdx - 1;
        renderSlides();
    });

    window.addEventListener('resize', renderSlides);



})();