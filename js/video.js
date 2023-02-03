(function () {
    const modal = document.querySelector(".modal");
    const overlay = document.querySelector(".overlay");
    const openModalBtn = document.querySelector(".video__icon");
    const closeModalBtn = document.querySelector(".video__btn-close");
    const coffeeVideo = document.getElementById("coffe-video");

    const closeModal = function () {
        modal.classList.add("hidden");
        overlay.classList.add("hidden");
    };

   

    closeModalBtn.addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal);


    const openModal = function () {
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
    };

    openModalBtn.addEventListener("click", openModal);

})();