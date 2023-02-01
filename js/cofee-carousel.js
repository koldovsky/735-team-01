(function () {

    const slides = [
        '<div><img class="cofee-item" src="img/cheerup.png" alt="cheerup"></div>',
        '<div><img class="cofee-item" src="img/coffeemachine.png" alt="coffeemachine"> </div> ',
        '<div><img class="cofee-item" src="img/drinkingcoffee.png" alt="drinkingcofee">  </div>',
        '<div><img class="cofee-item" src="img/familycouple.png" alt="familycouple"> </div>',
        '<div><img class="cofee-item" src="img/kettleforcoffee.png" alt="kettleforcoffee"> </div>',
        '<div><img class="cofee-item" src="img/smellcoffee.png" alt="smellcoffee"> </div>'
    ];
    

    let currentSlideIdx = 0;

    function renderSlides() {
        const slideContainer = document.querySelector('.carousel-slide-container');
        slideContainer.innerHTML = slides[currentSlideIdx];
        if (window.innerWidth >= 768) {
            const secondSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
            slideContainer.innerHTML += slides[secondSlideIdx];
            if (window.innerWidth >= 900) {
                const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
                slideContainer.innerHTML += slides[thirdSlideIdx];
            }
        }
    }

    function nextSlide() {
        currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
        renderSlides();
    }



    renderSlides();

    const btnNext = document.querySelector('.btn-next');
    btnNext.addEventListener('click', nextSlide);

    const btnPrev = document.querySelector('.btn-prev');
    btnPrev.addEventListener('click', () => {
        currentSlideIdx = currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
        renderSlides();
    });

    window.addEventListener('resize', renderSlides);

})();
