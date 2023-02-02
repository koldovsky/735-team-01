(function() {
    
    function updateClock() {
        const clockContainer = document.querySelector('.clock');
        clockContainer.style.color = 'black';
        clockContainer.style = 'font-weight:bold';
        clockContainer.classList.add('highlight');
        clockContainer.innerText = new Date().toLocaleTimeString('uk');        
    }

    setInterval(updateClock, 1000);

})();