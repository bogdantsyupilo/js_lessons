'use strict';

function stringChecker(string) {
    if ( typeof string != typeof "string" ) {
        alert('Введите строку!');
    }
    
    let stringSpaceFix = string.trim();
        console.log(stringSpaceFix);
    
    if (string.length > 30) {
        return alert(string.substring(0, 30) + '...');
    }
}

stringChecker(prompt('Введите строку...'));