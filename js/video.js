(function () {
    const modal = document.querySelector(".modal");
    const overlay = document.querySelector(".overlay");
    const openModalBtn = document.querySelector(".video__icon");
    const closeModalBtn = document.querySelector(".video__btn-close");
 

    const closeModal = function () {
        modal.classList.add("hidden");
        overlay.classList.add("hidden");
        const iframes = document.getElementsByTagName("iframe");
        if (iframes != null) {
            for (let i = 0; i < iframes.length; i++) {
                iframes[i].src = iframes[i].src;
            }
        }
    };


    closeModalBtn.addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal);


    const openModal = function () {
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
    };

    openModalBtn.addEventListener("click", openModal);

})();