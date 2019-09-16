'use strict';

// Sorting
let collect = document.querySelector('.books'),
    elem = document.querySelectorAll('.book');

collect.insertBefore(elem[1], elem[0]);
collect.insertBefore(elem[4], elem[2]);
collect.insertBefore(elem[5], elem[2]);
collect.insertBefore(elem[3], elem[5]);
collect.insertBefore(elem[4], elem[3]);

// Image
let body = document.querySelector('body');

body.setAttribute('style', 'background-image: url(./image/you-dont-know-js.jpg)');

// Ad Remove
let adBlock = document.querySelector('.adv');

adBlock.parentNode.removeChild(adBlock);

// Title
elem[4].classList.add('change')

let title = document.querySelector('.change h2 a')

title.textContent = 'Книга 3. this и Прототипы Объектов';

// Chapter's title changing
elem[0].classList.add('chapterTwo');
elem[5].classList.add('chapterFive');

let chapterTwo = document.querySelector('.chapterTwo ul'),
    chapterFive = document.querySelector('.chapterFive ul');
let chapterTwoList = document.querySelectorAll('.chapterTwo ul li'),
    chapterFiveList = document.querySelectorAll('.chapterFive ul li');

chapterTwo.insertBefore(chapterTwoList[6], chapterTwoList[4]);
chapterTwo.insertBefore(chapterTwoList[8], chapterTwoList[4]);
chapterTwo.insertBefore(chapterTwoList[2], chapterTwoList[10]);

chapterFive.insertBefore(chapterFiveList[2], chapterFiveList[6]);
chapterFive.insertBefore(chapterFiveList[9], chapterFiveList[3]);
chapterFive.insertBefore(chapterFiveList[5], chapterFiveList[8]);

// New Chapter List
elem[2].classList.add('chapterSix');

let chapterSix = document.querySelector('.chapterSix ul'),
    newList = document.createElement('li');

newList.textContent = 'Глава 8: За пределами ES6';
chapterSix.appendChild(newList);

let chapterSixList = document.querySelectorAll('.chapterSix ul li');

chapterSix.insertBefore(chapterSixList[10], chapterSixList[9]);