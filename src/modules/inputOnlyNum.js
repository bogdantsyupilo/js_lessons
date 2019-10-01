const inputOnlyNum = (element)=> {
    let block = document.querySelector(element),
        input = block.querySelectorAll('input');
    
    for(let i = 0; i < input.length; i++){
        input[i].addEventListener('input', ()=> {
            input[i].value = input[i].value.replace(/\D/g, '');
        });
    }
};

export default inputOnlyNum;