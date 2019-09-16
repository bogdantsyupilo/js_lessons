'use strict';

let list = document.querySelector('ul'), 
    item = document.querySelectorAll('ul li');
console.log(list, item);

document.querySelector('button').onclick = function() {
    let input = document.querySelector('input');
    let inputValue = input.value; 
    
    let newItem = document.createElement('li');
    newItem.textContent = inputValue;

    list.appendChild(newItem);
}