const toggleMenu = () => {
    let body = document.querySelector('body'),
        menuTag = document.querySelector('menu');

    document.addEventListener('click', (event) => {
        let target = event.target;
        if(target.closest('.menu')) {
            menuTag.classList.toggle('active-menu');
        } else if (!target.closest('menu')) {
            menuTag.classList.remove('active-menu');
        }
    });

    menuTag.addEventListener('click', (event) => {
        let target = event.target;
        
        if(target.classList.contains('close-btn')) {
            menuTag.classList.toggle('active-menu');
        } else if (target.closest('ul>li>a')) {
            menuTag.classList.toggle('active-menu');
        }   
    });
};

export default toggleMenu;