window.addEventListener('DOMContentLoaded', ()=> {
    'use strict';

    // Timer
    const countTimer = (deadline)=> {
        let timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');
        
        const getZero = (time)=> {
            if(time > 0 && time < 10){
                return '0' + time;
            } else {
                return time;
            }
        };

        const getTimeRemaining = ()=> {
            let dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000;

            let seconds = Math.floor(timeRemaining % 60),
            minutes = Math.floor((timeRemaining / 60) % 60),
            hours = Math.floor(timeRemaining / 60 / 60);
            return {timeRemaining, hours, minutes, seconds};
        };

        let timer = getTimeRemaining();

        const updateClock = ()=> {

            timerHours.textContent = getZero(timer.hours);
            timerMinutes.textContent = getZero(timer.minutes);
            timerSeconds.textContent = getZero(timer.seconds);

            if(timer.timeRemaining < 0){
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
            }
        };

        updateClock();
    };
    setInterval(countTimer, 1000, '01 october 2019');

    // Menu
    const toggleMenu = ()=> {
        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            closeBtn = document.querySelector('.close-btn'),
            menuItems = menu.querySelectorAll('ul>li');

        const handlerMenu = ()=> {
            menu.classList.toggle('active-menu');
        }
        
        btnMenu.addEventListener('click', handlerMenu)
        closeBtn.addEventListener('click', handlerMenu)
        menuItems.forEach((elem)=> {elem.addEventListener('click', handlerMenu)});
    };
    toggleMenu();

    // Popup
    const togglePopup = ()=> {
        let popup = document.querySelector('.popup'),
            btnPopup = document.querySelectorAll('.popup-btn'),
            closePopup = document.querySelector('.popup-close'),
            start = 0;
        
        const step = ()=> {
            start += 0.1;
            popup.style.opacity = start;
            if(start < 1){
                requestAnimationFrame(step);
            }
        };

        btnPopup.forEach((elem)=> {
            elem.addEventListener('click', ()=> {
                if(screen.width < 768){
                    cancelAnimationFrame(step);
                    popup.style.display = 'block';
                } else{
                    popup.style.display = 'block';
                    requestAnimationFrame(step);
                    start = 0;
                }
            });
        });
        closePopup.addEventListener('click', ()=>{
            popup.style.display = `none`;
        });


    };
    togglePopup();
});