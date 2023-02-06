(function() {

    function updateClock() {
        const clockContainer = document.querySelector('.underline__oclock');
        clockContainer.style.color = 'white';
        clockContainer.classList.add('highlight');
        clockContainer.innerText = new Date().toLocaleTimeString('uk');
    }

    setInterval(updateClock, 1000);

})();