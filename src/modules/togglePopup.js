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

export default togglePopup;