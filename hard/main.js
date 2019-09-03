'use strict';

let lang = prompt('Enter "ru" or "eng" / Введите "ru" или "eng"');
let weekRus = 'Воскресенье, Понедельник, Вторник, Среда, Четверг, Пятница, Суббота';
let weekEng = 'Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday';

// 'if' method
console.log('"if" method')
if(lang == 'ru') {
    console.log(weekRus.split(', '));
}   else if(lang == 'eng') {
    console.log(weekEng.split(', '));
} else {
    console.log('Error. Try again. / Ошибка. Попробуйте снова.');
}

// 'switch' method
console.log('--------')
console.log('"switch" method')
switch(lang) {
    case 'ru':
        console.log(weekRus.split(', '));
        break;
    case 'eng':
        console.log(weekEng.split(', '));
        break;
    default: 
        console.log('Error. Try again. / Ошибка. Попробуйте снова.');
        break;
}
// 'array' method
console.log('--------')
console.log('"array" method')
let arrWeekLang = [ 
    ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
];
(lang == 'ru') ? console.log(arrWeekLang[0]) : console.log(arrWeekLang[1]);

// namePerson
console.log('--------')
let namePerson = prompt('Имя сотрудника/студента');

(namePerson == 'Артем') ? console.log(namePerson + ' -' + ' директор') :
    (namePerson == 'Максим') ? console.log(namePerson + ' -' + ' преподаватель') :
    console.log(namePerson + ' -' + ' студент')
;