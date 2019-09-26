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
    const toggleMenu = () => {
        let menuBtn = document.querySelector('.menu'),
            body = document.querySelector('body'),
            menuTag = document.querySelector('menu');

        document.addEventListener('click', (event) => {
            let target = event.target;
            if(target.closest('.menu')) {
                menuTag.classList.toggle('active-menu');
            } else if (!target.closest('menu')) {
                menuTag.classList.remove('active-menu');
            }
        });

        menuTag.addEventListener('click', (event) => {
            let target = event.target;
            
            if(target.classList.contains('close-btn')) {
                menuTag.classList.toggle('active-menu');
            } else if (target.closest('ul>li>a')) {
                menuTag.classList.toggle('active-menu');
            }   
        });
    };

    toggleMenu();

    // Popup
    const togglePopup = ()=> {
        let popup = document.querySelector('.popup'),
            btnPopup = document.querySelectorAll('.popup-btn'),
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

        popup.addEventListener('click', (event)=> {
            let target = event.target;

            if(target.classList.contains('popup-close')){
                popup.style.display = `none`;
            } else {
                target = target.closest('.popup-content');

                if(!target){
                    popup.style.display = `none`;
                }
            }
        });

    };
    togglePopup();

    // Tabs
    const tabs = ()=> {
        let tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');
        
        const toggleTabContent = (index)=> {
            for(let i = 0; i < tabContent.length; i++){
                if(i === index){
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            }
        };

        tabHeader.addEventListener('click', (event)=> {
            let target = event.target;
                target = target.closest('.service-header-tab');

            if(target){
                tab.forEach((item, i)=> {
                    if(item === target){
                        toggleTabContent(i);
                    }
                });
            }
        });
    };
    tabs();
});