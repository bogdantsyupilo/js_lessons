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

export default inputValid;