window.addEventListener("DOMContentLoaded", ()=> {
    'use strict';
    // Inputs Validation
    const inputValid = ()=> {
        const inputsPhone = document.querySelectorAll('input[name = user_phone]'),
        inputsName = document.querySelectorAll('input[name = user_name]');
        
        inputsPhone.forEach((elem) => {
            elem.addEventListener('input', () => {
                elem.value = elem.value.replace(/[^0-9\+]/, '');
            });
        });
        inputsName.forEach((elem)=> {
            elem.addEventListener('input', () => {
                elem.value = elem.value.replace(/[^а-яё\s]/ig, '');
            });
        });
    };
    inputValid();
    // Discount Popup
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
    togglePopup('.discount-btn', '.popup-discount');
    togglePopup('.call-btn', '.popup-call');
    togglePopup('.check-btn', '.popup-check');
    togglePopup('.director-btn','.popup-consultation')

    // Send Form
    const sendForm = (formIndex)=> {

        const errorMessage = `Что-то пошло не так...`,
            loadMessage = `Отправка...`,
            successMessage = `Спасибо! Мы свяжемся с Вами!`;
        
        const form = document.querySelectorAll(formIndex),
            statusMessage = document.createElement('div');
    
        statusMessage.style.cssText = `font-size: 1rem;
        margin-top: 5px;
        color: #fff;
        display: inline-block;
        background: #90c406;
        padding: 10px;
        border-radius: 15px;`;
    
        form.forEach((elem)=> {
            elem.addEventListener('submit', (event)=> {
                event.preventDefault();
        
                elem.appendChild(statusMessage);
                statusMessage.textContent = loadMessage;
                const formData = new FormData(elem);
                let body = {};
        
                for(let val of formData.entries()){
                    body[val[0]] = val[1];
        
                }
                postData(body)
                    .then((response)=> {
                        if (response.status !== 200){
                            throw new Error ('Status network: NOT 200');
                        }
                        statusMessage.textContent = successMessage; 
                    })
                    .catch((error)=> {
                        statusMessage.textContent = errorMessage;
                        console.error(error);
                    });
            });
        
            const resetForm = ()=> {
                elem.reset();
            };
        });
        
        const postData = (body)=> {
    
            return fetch('./server.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
        };
    };
    sendForm('.main-form');
    sendForm('.capture-form');

    // Show More Button

    const showMore = ()=> {
        const addSentenceBtn = document.querySelector('.add-sentence-btn');
        
        addSentenceBtn.addEventListener('click', ()=> {
            const hidden1 = document.querySelectorAll('.hidden'),
                hidden2 = document.querySelector('.visible-sm-block');

            hidden1.forEach((elem)=> {
                elem.classList.remove('hidden');
            });
            hidden2.classList.remove('visible-sm-block');
            addSentenceBtn.classList.add('hidden');
        }); 
    };
    showMore();
    
});