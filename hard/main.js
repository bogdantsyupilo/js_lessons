let num = 266219;

// num into Array
numInArray = num.toString().split('');

// Multiply numbers in num
multNum = numInArray.reduce(
    function (num1, num2) {
        return  num1 * num2 ;
    });
console.log('multiplication of numbers: ', multNum);

// Exponentiation
result = multNum**3;
resultArray = result.toString().split('');
console.log('result after exponentiation: ', resultArray[0] + resultArray[1]);
