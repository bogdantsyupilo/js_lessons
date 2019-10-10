const accordion = ()=> {
    const panelGroup = document.querySelectorAll('.panel-group'),
    panelHeading = document.querySelectorAll('.panel-heading'),
    panelCollapse = document.querySelectorAll('.panel-collapse'),
    checkboxes = document.querySelectorAll('.onoffswitch-checkbox');

    const toggleList = (index)=> {
    for (let i = 0; i < panelCollapse.length; i++) {
            if (index === i) {
                panelCollapse[i].classList.add('in');
            } else {
                panelCollapse[i].classList.remove('in');
            }
        }
    };

    panelGroup.forEach( (elem) => {
        elem.addEventListener('click', (event) => {
            let target = event.target;  
            if (target.matches('.construct-btn span') || target.matches('.construct-btn')) {
                panelHeading.forEach( (item, i) => {
                    item = target.closest('.panel-collapse').previousElementSibling;
                    if (item) {
                        event.preventDefault(); 
                        panelHeading.forEach( (e, i) => {
                            if (e === item) {
                                if (i < 3) {  
                                    i++;
                                    toggleList(i);
                                } else {
                                    return;
                                } 
                            }
                        });
                    }   
                });
                } else {
                target = target.closest('.panel-heading');
                if (target) {
                    panelHeading.forEach( (item, i) => {
                        if (item === target) {
                            toggleList(i);
                        }
                    });
                }
            }   
        });
    });
};

export default accordion;
