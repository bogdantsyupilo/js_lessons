const preventDefault = ()=> {
    const a = document.querySelectorAll('a');
    a.forEach((elem) => {
        elem.addEventListener('click', (e) => {
            e.preventDefault();
        });
    });
};

export default preventDefault;