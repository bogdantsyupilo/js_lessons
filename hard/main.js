'use strict';

let week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

for(let i = 0; i < week.length; i++){
    let myDate = new Date();
    if(week[i] === week[myDate.getDay()]){
        console.log('%c' + week[i], 'font-weight: bold');
    } else if(week[i] === 'Воскресенье' || week[i] === 'Суббота') {
        console.log('%c' + week[i], 'font-style: italic');
    } else {
        console.log(week[i]);
    }
}