const sendForm = (formIndex)=> {
    const inputNumber = document.querySelectorAll('input[type = tel]'),
    inputText = document.querySelectorAll('input[type = text]'),
    inputEmail =  document.querySelectorAll('input[type = email]'),
    inputMess =  document.getElementById('form2-message');

    inputNumber.forEach((elem)=> {
        elem.addEventListener('input', ()=> {
            elem.value = elem.value.replace(/[^0-9\+]/, '');
        });
    });
    inputText.forEach((elem)=> {
        elem.addEventListener('input', ()=> {
            elem.value = elem.value.replace(/[^а-яё\s]/ig, '');
        });
    });
    inputEmail.forEach((elem)=> {
        elem.addEventListener('input', ()=> {
            elem.value = elem.value.replace(/[^a-z\.\@]/ig, '');
        });
    });
    inputMess.addEventListener('input', ()=> {
        inputMess.value = inputMess.value.replace(/[^а-яё\s\,\!\.]/ig, '');
    });

    const errorMessage = `Что-то пошло не так...`,
        loadMessage = `Отправка...`,
        successMessage = `Спасибо! Мы свяжемся с Вами!`;
    
    const form = document.getElementById(formIndex),
        statusMessage = document.createElement('div');

    statusMessage.style.cssText = `font-size: 2rem;
    color: #fff !important;
    margin-top: 5px;`;

    form.addEventListener('submit', (event)=> {
        event.preventDefault();

        form.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;
        const formData = new FormData(form);
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
            })
            .then(resetForm);
    });

    const resetForm = ()=> {
        form.reset();
    };
    
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

export default sendForm;