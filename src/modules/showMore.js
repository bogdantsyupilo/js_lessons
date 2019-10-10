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

export default showMore;