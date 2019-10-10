const calculator = ()=> {
    const accordion = document.getElementById('accordion'),
        selectors = accordion.querySelectorAll('select'),
        switches = accordion.querySelectorAll('.onoffswitch-checkbox'),
        selectBoxes = accordion.querySelectorAll('.select-box'),
        titleTexts = accordion.querySelectorAll('.title-text'),
        links = accordion.querySelectorAll('a'),
        distance = accordion.querySelectorAll('input')[2],
        total = document.getElementById('calc-result');
    let resultMultiplier = 1,
        base = 0,
        bottom = 0,
        info = { 
            type: 1,
            diameter_1: 1.4,
            ringNumber_1: 1,
            diameter_2: 0,
            ringNumber_2: 0,
            bottom: true,
            distance: 0,
            price: 0
        };

    const showSecondSelector = ()=> {
        if (switches[0].checked) {
            selectBoxes[2].style.display = 'none';
            selectBoxes[3].style.display = 'none';
            titleTexts[1].style.display = 'none';
            selectors[2].selectedIndex = 0;
            selectors[3].selectedIndex = 0;
        } else {
            selectBoxes[2].style.display = 'inline-block';
            selectBoxes[3].style.display = 'inline-block';
            titleTexts[1].style.display = 'block';
        }
    };
    showSecondSelector();

    const calcCurrent = ()=> {
        const multipliers = [],
            currentMultipliers = [[1, 1.2],[1, 1.3, 1.5],[1, 1.2],[1, 1.3, 1.5]];

        let thisMultiplier = 1;

        const selectorValues = [],
            currentSelectorValues = [[1.4, 2.0], [1, 2, 3], [1.4, 2.0], [1, 2, 3]];

        selectors.forEach((item,i)=> {
            if (multipliers[i] != item.selectedIndex) {
                thisMultiplier = thisMultiplier * currentMultipliers[i][item.selectedIndex];
            }
            multipliers[i] = item.selectedIndex;
            selectorValues[i] = currentSelectorValues[i][item.selectedIndex]
        });

        if (switches[0].checked) {
            base = 10000;
            info.type = 1;
            info.diameter1 = selectorValues[0];
            info.ringNumber1 = selectorValues[1];
            info.diameter2 = 0;
            info.ringNumber2 = 0;
        } 

        if (!switches[0].checked) {
            base = 15000;
            info.type = 2;
            info.diameter1 = selectorValues[0];
            info.ringNumber1 = selectorValues[1];
            info.diameter2 = selectorValues[2];
            info.ringNumber2 = selectorValues[3];
        }

        if ((switches[0].checked) && (switches[1].checked)) {
            bottom = 1000;
            info.bottom = true;
        }

        if ((!switches[0].checked) && (switches[1].checked)) {
            bottom = 2000;
            info.bottom = true;
        }

        if (!switches[1].checked) {
            bottom = 0;
            info.bottom = false;
        }

        resultMultiplier = thisMultiplier;
        total.value = `${Math.ceil((base + bottom) * resultMultiplier)} ₽`;
        info.distance = +distance.value;
        info.price = total.value;
    };
    calcCurrent();

    selectors.forEach((elem)=> {
        elem.addEventListener('change', () => {
            calcCurrent();
        });
    });
    switches.forEach((elem)=> {
        elem.addEventListener('change', () => {
            calcCurrent();
            showSecondSelector(); 
        });
    });
    distance.addEventListener('change', ()=> {
        calcCurrent();
    });
    
    return(info);
};

export default calculator;