'use strict';

import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import "es6-promise/auto";
import formData from 'formdata-polyfill';


import imgAttribute from './modules/imgAttribute';
import inputOnlyNum from './modules/inputOnlyNum';
import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

// Replace attribute (data-img <-> src)
imgAttribute();

// Input Validation (only numbers)
inputOnlyNum('.calc-block');

// Timer
setInterval(countTimer, 1000, '13 october 2019');

// Menu
toggleMenu();

// Popup
togglePopup();

// Tabs
tabs();

// Slider
slider();

// Calculator
calc(100);

// Send Ajax Form
sendForm('form1');
sendForm('form2');
sendForm('form3');