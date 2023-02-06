(function(){

    const testimonialsSlides=[
        `<div class="content__item">
            <img src="img/decoration.svg" alt="" class="item__decoration">
            <h4 class="item__name">John Jeely</h4>
            <p class="item__role">Coffee Enthusiast</p>
            <p class="item__citation">“I am the kind of person that can sing odes to coffee. At the course, I
                learned to make the perfect coffee at home, so now I have no reason to leave it at all. I can't
                even count how much money I’m saving on coffee-to-go every day!”</p>
            <p class="item__date">December 15, 2022</p>
        </div>`,
        `<div class="content__item">
            <img src="img/decoration.svg" alt="" class="item__decoration">
            <h4 class="item__name">Mary Woolen</h4>
            <p class="item__role">Barista</p>
            <p class="item__citation">“I was so happy to study at CoffeeLab. They know how to work with poor
                learners and find the best approach to them. Sure, I still have many tricks to learn, but this
                school gave me basic skills that I use every day at work.”</p>
            <p class="item__date">March 25, 2022</p>
        </div>`,
        `<div class="content__item">
            <img src="img/decoration.svg" alt="" class="item__decoration">
            <h4 class="item__name">Lilly Blues</h4>
            <p class="item__role">Bar Owner</p>
            <p class="item__citation">“It changed the way I'm doing my business. The courses gave me the
                    management basics for my own coffee bar and the community gave the best baristas. Running my
                    coffee place is now such a pleasure.”</p>
            <p class="item__date">November 22, 2022</p>
        </div>`
    ];

    let currentSlideIdx=0;

    function renderSlides(testimonialsSlides){
        
        const slideContainer=document.querySelector('.testimonials__slide__container');
        slideContainer.innerHTML=testimonialsSlides[currentSlideIdx];
        if (window.innerWidth>=768){
            const secondSlideIdx= currentSlideIdx+1 >= testimonialsSlides.length? 0 : currentSlideIdx+1;
            slideContainer.innerHTML+=testimonialsSlides[secondSlideIdx];
        }
    };

    function nextSlide(){
        currentSlideIdx++;
        if (currentSlideIdx>= testimonialsSlides.length){
            currentSlideIdx=0;
        };
        renderSlides(testimonialsSlides);
    };    

    renderSlides(testimonialsSlides);

    const btnNext=document.querySelector('.carousel__btn__next');
    btnNext.addEventListener('click', nextSlide)


    const btnPrev=document.querySelector('.carousel__btn__prev');
    btnPrev.addEventListener('click', () => {
        currentSlideIdx=currentSlideIdx - 1 < 0 ? testimonialsSlides.length-1 : currentSlideIdx-1;
        renderSlides(testimonialsSlides);
    });


})();