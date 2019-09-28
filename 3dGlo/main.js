window.addEventListener('DOMContentLoaded', ()=> {
    'use strict';

    // Replace attribute (data-img <-> src)
    const imgAttribtue = ()=> {
        let img = document.querySelectorAll('.command__photo');


        for(let i = 0; i < img.length; i++){
            img[i].addEventListener('mouseenter', (e)=> {
                let temp = event.target.src;
                event.target.src = event.target.dataset.img;
                event.target.dataset.img = temp;
            });
            img[i].addEventListener('mouseleave', (e)=> {
                let temp = event.target.src;
                event.target.src = event.target.dataset.img;
                event.target.dataset.img = temp;
            })
        }
    };
    imgAttribtue();

    // Input Validation (only numbers)
    const inputOnlyNum = (element)=> {
        let block = document.querySelector(element),
            input = block.querySelectorAll('input');
        
        for(let i = 0; i < input.length; i++){
            input[i].addEventListener('input', ()=> {
                input[i].value = input[i].value.replace(/\D/g, '');
            });
        }
    }
    inputOnlyNum('.calc-block');

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
        let body = document.querySelector('body'),
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

    // Slider
    const slider = ()=> {
        const slide = document.querySelectorAll('.portfolio-item'),
            btn = document.querySelectorAll('.portfolio-btn'),
            dotsList = document.querySelector('.portfolio-dots'),
            slider = document.querySelector('.portfolio-content');

        let currentSlide = 0,
            interval = 0,
            newDot;

        for (let i = 0; i < slide.length; i++) {
            newDot = document.createElement('li');
            newDot.classList.add('dot');
            dotsList.appendChild(newDot);
            if(i === 0){
                newDot.classList.add('dot-active');
            }
        }

        let dot = document.querySelectorAll('.dot');

        const prevSlide = (elem, index, strClass)=> {
            elem[index].classList.remove(strClass);
        };
        const nextSlide = (elem, index, strClass)=> {
            elem[index].classList.add(strClass);
        };

        const autoPlaySlide = ()=> {
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if(currentSlide >= slide.length){
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        };
        const startSlide = (time = 3000)=> {
            interval = setInterval(autoPlaySlide, time);
        };
        const stopSlide = ()=> {
            clearInterval(interval);
        };
        
        slider.addEventListener('click', (event)=> {
            event.preventDefault();
            
            let target = event.target;

            if(!target.matches('.portfolio-btn, .dot')){
                return;
            }

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');

            if(target.matches('#arrow-right')){
                currentSlide++;
            } else if(target.matches('#arrow-left')){
                currentSlide--;
            } else if(target.matches('.dot')){
                dot.forEach((elem, index)=> {
                    if(elem === target){
                        currentSlide = index;
                    }
                });
            }

            if(currentSlide >= slide.length){
                currentSlide = 0;
            }

            if(currentSlide < 0){
                currentSlide = slide.length - 1;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        });

        slider.addEventListener('mouseover', (event)=> {
            let target = event.target;
            if(target.matches('.portfolio-btn') ||
            target.matches('.dot')){
                stopSlide();
            }
        });
        slider.addEventListener('mouseout', (event)=> {
            let target = event.target;
            if(target.matches('.portfolio-btn') ||
            target.matches('.dot')){
                startSlide();
            }
        });

        startSlide(1500);
    };
    slider();

    // Calculator
    const calc = (price = 100)=> {
        let calcBlock = document.querySelector('.calc-block'),
            calcType = document.querySelector('.calc-type'),
            calcCount = document.querySelector('.calc-count'),
            calcSquare = document.querySelector('.calc-square'),
            calcDay = document.querySelector('.calc-day'),
            totalValue = document.getElementById('total');

        const countSum = ()=> {
            let total = 0,
                countValue = 1,
                dayValue = 1,
                typeValue = calcType.options[calcType.selectedIndex].value,
                squareValue = +calcSquare.value;
            
            if(calcCount.value > 1){
                countValue += (calcCount.value - 1)  / 10;
            }

            if(calcDay.value && calcDay.value < 5){
                dayValue *= 2;
            } else if(calcDay.value && calcDay.value < 10){
                dayValue *= 1.5;
            }
            
            if(typeValue && squareValue){
                total = price * typeValue * squareValue * countValue * dayValue;
            }
                

            totalValue.textContent = total;
        };

        calcBlock.addEventListener('change', (event) => {
            let target = event.target;

            if(target.matches('select') || target.matches('input')){
                countSum();
            }
        });
    };
    calc(100);
});