'use strict';

// array
let arr = ['300', '218', '508', '503,', '400', '404', '101'];

for(let i = 0; i < 6; i++){
    if(arr[i].substring(0, 1) == '2' || arr[i].substring(0, 1) == '4'){
        console.log('Найденное число: ', arr[i]);
    }
}

// simple numbers
top:
for (let i = 2; i < 100; i++){ 

  for (let j = 2; j < i; j++){ 
    if (i % j === 0) {
        continue top;
    }
  }
  console.log(i + ' - просто число, его делители - 1 и ' + i);
}
