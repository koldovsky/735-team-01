(function () {

    const coursesSlides = [
        `<div class="slider-item__coureses active">
            <img class="img__courses" src="img/coffee-courses.png">
            <h3 class="item-courses__tittle">Latte art course</h3>
            <div class="blok-mark__courses">
                <div class="check-mark__courses">
                    <img width="20" src="img/date-courses.svg" class="date-courses" alt="icon">
                    <span class="courses-mark__text">5 days</span>
                </div>
                <div class="check-mark__courses">
                    <img width="20" src="img/money-courses.svg" class="money-courses" alt="icon">
                    <span class="courses-mark__text">$150</span>
                </div>
                <div class="check-mark__courses">
                    <img width="20" src="img/person-courses.svg" class="person-courses" alt="icon">
                    <span class="courses-mark__text">5-10</span>
                </div>
            </div>
            <div class="text-mark__courses">
                <p>Turn each coffee you make into a masterpiece with our Latte Art Course. You will learn how to draw beautiful pictures on the foam, from simple leaves and hearts to much more complicated designs.</p>
            </div>
            <div class="carousel-coureses__button">
                <a href="#contacts" class="carousel__btn-select button">Sign Up</a>
            </div>
        </div>`,
        `<div class="slider-item__coureses active">
            <img class="img__courses" src="img/time-a-coffee.png">
            <h3 class="item-courses__tittle">Barista license course</h3>
            <div class="blok-mark__courses">
                <div class="check-mark__courses">
                    <img width="20" src="img/date-courses.svg" class="date-courses" alt="icon">
                    <span class="courses-mark__text">23 days</span>
                </div>
                <div class="check-mark__courses">
                    <img width="20" src="img/money-courses.svg" class="money-courses" alt="icon">
                    <span class="courses-mark__text">$365</span>
                </div>
                <div class="check-mark__courses">
                    <img width="20" src="img/person-courses.svg" class="person-courses" alt="icon">
                    <span class="courses-mark__text">5-10</span>
                </div>
            </div>
            <div class="text-mark__courses">
                <p>If you feel that you have to be the one making wholesome coffee, this crash course will give you the basics of working with a coffee machine, barista's responsibilities, and a tour around the kitchen.</p>
            </div>
            <div class="carousel-coureses__button">
                <a href="#contacts" class="carousel__btn-select button">Sign Up</a>
            </div>
        </div>`,
        `<div class="slider-item__coureses active">
            <img class="img__courses" src="img/making-coffee.png">
            <h3 class="item-courses__tittle">Advanced barista course</h3>
            <div class="blok-mark__courses">
                <div class="check-mark__courses">
                    <img width="20" src="img/date-courses.svg" class="date-courses" alt="icon">
                    <span class="courses-mark__text">14 days</span>
                </div>
                <div class="check-mark__courses">
                    <img width="20" src="img/money-courses.svg" class="money-courses" alt="icon">
                    <span class="courses-mark__text">$350</span>
                </div>
                <div class="check-mark__courses">
                    <img width="20" src="img/person-courses.svg" class="person-courses" alt="icon">
                    <span class="courses-mark__text">3-7</span>
                </div>
            </div>
            <div class="text-mark__courses">
                <p>There is always space for improvement, even if you are an experienced barista. This 2-week course will improve your skills in coffee blending and coffee shop management. It's our best course for professionals.</p>
            </div>
            <div class="carousel-coureses__button">
                <a href="#contacts" class="carousel__btn-select button">Sign Up</a>
            </div>
        </div>`,
        `<div class="slider-item__coureses active">
            <img class="img__courses" src="img/type-of-coffee.png">
            <h3 class="item-courses__tittle">Coffee like a pro at home</h3>
            <div class="blok-mark__courses">
                <div class="check-mark__courses">
                    <img width="20" src="img/date-courses.svg" class="date-courses" alt="icon">
                    <span class="courses-mark__text">5 days</span>
                </div>
                <div class="check-mark__courses">
                    <img width="20" src="img/money-courses.svg" class="money-courses" alt="icon">
                    <span class="courses-mark__text">$150</span>
                </div>
                <div class="check-mark__courses">
                    <img width="20" src="img/person-courses.svg" class="person-courses" alt="icon">
                    <span class="courses-mark__text">5-10</span>
                </div>
            </div>
            <div class="text-mark__courses">
                <p>If find yourself asking too much at coffee shops, try making coffee professionally yourself. Become a pro coffee maker at home and then invite your friends for a chat to impress them with your coffee.</p>
            </div>
            <div class="carousel-coureses__button">
                <a href="#contacts" class="carousel__btn-select button">Sign Up</a>
            </div>
        </div>`
    ];

    let currentSlideIdx = 0;

    function renderSlides() {
        const slideContainer = document.querySelector('.courses__slide-container');
        slideContainer.innerHTML = coursesSlides[currentSlideIdx];
        if (window.innerWidth >= 767) {
            const secondSlideIdx = currentSlideIdx + 1 >= coursesSlides.length ? 0 : currentSlideIdx + 1;
            slideContainer.innerHTML += coursesSlides[secondSlideIdx];
            if (window.innerWidth >= 991) {
                const thirdSlideIdx = secondSlideIdx + 1 >= coursesSlides.length ? 0 : secondSlideIdx + 1;
                slideContainer.innerHTML += coursesSlides[thirdSlideIdx];
            }
        }
    }

    function nextSlide() {
        currentSlideIdx = currentSlideIdx + 1 >= coursesSlides.length ? 0 : currentSlideIdx + 1;
        renderSlides();
    }

    // setInterval(nextSlide, 3000);

    renderSlides();

    const btnNext = document.querySelector('.slick-next');
    btnNext.addEventListener('click', nextSlide);

    const btnPrev = document.querySelector('.slick-prev');
    btnPrev.addEventListener('click', () => {
        currentSlideIdx = currentSlideIdx - 1 < 0 ? coursesSlides.length - 1 : currentSlideIdx - 1;
        renderSlides();
    });

    window.addEventListener('resize', renderSlides);



})();
