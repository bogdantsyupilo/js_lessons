const sendForm = (formIndex, calcInfo)=> {

    const errorMessage = `Что-то пошло не так...`,
        loadMessage = `Отправка...`,
        successMessage = `Спасибо! Мы свяжемся с Вами!`;
    
    const form = document.querySelectorAll(formIndex),
        statusMessage = document.createElement('div');
    
    let calcTrue = 0,
        questTrue = 0;
    const btnSend = document.querySelectorAll('.call-btn')[1];
    btnSend.addEventListener('click', ()=> {
        calcTrue = 1;
    });
    const directorBtn = document.querySelector('.director-btn');
    directorBtn.addEventListener('click', (e)=> {
        e.preventDefault();
        questTrue = 1;
    });

    const userQuest = document.getElementsByName('user_quest');
    
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
            let formBody = {},
            body = {};
    
            formData.forEach((val, key) => {
                formBody[key] = val;
            });

            if (calcTrue === 1){
                let mainBody = calcInfo;
                mainBody.body = {};
                mainBody.body = formBody;
                body = mainBody;
                calcTrue = 0;
            } else if (questTrue === 1){
                body = formBody;
                body.userQuestion = userQuest[0].value;
                questTrue = 0;
            } else {
                body = formBody;
            }

            const resetForm = ()=> {
                elem.reset();
            };
            
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

export default sendForm;