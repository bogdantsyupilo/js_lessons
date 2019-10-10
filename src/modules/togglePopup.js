const togglePopup = (currentButton, currentPopup)=> {
    const button = document.querySelectorAll(currentButton),
        popup = document.querySelector(currentPopup),
        buttonClose = popup.querySelector('.popup-close');
        
    let start = 0;
    const stepPlus = ()=> {
        start += 0.1;
        popup.style.opacity = start;
        if(start < 1){
            requestAnimationFrame(stepPlus);
        }
    };
    const stepMinus = ()=> {
        start -= 0.1
        popup.style.opacity = start;
        if(start > 0){
            requestAnimationFrame(stepMinus);
        } else{
            popup.style.display = 'none';
        }
    }

    button.forEach((elem)=> {
        elem.addEventListener('click', ()=> {
            if(screen.width < 768){
                cancelAnimationFrame(stepPlus);
                popup.style.display = 'block';
            } else{
                popup.style.display = 'block';
                requestAnimationFrame(stepPlus);
                start = 0;
            }
        });
    });

    popup.addEventListener('click', (event)=> {
        let target = event.target;

        if(target.classList.contains('popup-close')){

            if(screen.width < 768){
                cancelAnimationFrame(stepMinus);
                popup.style.display = 'none';
            } else{
                start = 1;
                requestAnimationFrame(stepMinus);
            }

        } else{

            target = target.closest('.popup-content');

            if(!target){
                if(screen.width < 768){
                    cancelAnimationFrame(stepMinus);
                    popup.style.display = 'none';
                } else{
                    start = 1;
                    requestAnimationFrame(stepMinus);
                }
            }

        }
    });
};

export default togglePopup;