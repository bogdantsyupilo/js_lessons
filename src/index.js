'use strict';

import accordion from './modules/accordion';
import calculator from './modules/calculator';
import inputValid from './modules/inputValid';
import preventDefault from './modules/preventDefault';
import sendForm from './modules/sendForm';
import showMore from './modules/showMore';
import togglePopup from './modules/togglePopup';

// Inputs Validation
inputValid();
// Prevent Default
preventDefault();
// Toggle Popup
togglePopup('.discount-btn', '.popup-discount');
togglePopup('.call-btn', '.popup-call');
togglePopup('.check-btn', '.popup-check');
togglePopup('.director-btn','.popup-consultation')
// Show More Button
showMore();
// Accordion
accordion();
// Calculator 
calculator();
// Send Form
sendForm('.main-form', calculator());
sendForm('.capture-form', calculator());