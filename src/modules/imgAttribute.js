const imgAttribute = ()=> {
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

export default imgAttribute;