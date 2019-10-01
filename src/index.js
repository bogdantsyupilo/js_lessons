'use strict';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import handlerPopUp from './modules/handlerPopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import changePhoto from './modules/changePhoto';
import calc from './modules/calc';
import sendForm from './modules/sendForm';
import inputsRegEx from './modules/inputsRegEx';


// Timer
countTimer('13 october 2019');

// Menu
toggleMenu();

// Popup
handlerPopUp();

// Tabs
tabs();

// Slider
slider();

// смена фото в секции "команда"
changePhoto();

//калькулятор
calc(100);

//Формы отправки send-ajax-form
sendForm('form1');
sendForm('form2');
sendForm('form3');

// реализация ввод с помощью регулярных выражении
inputsRegEx();    
