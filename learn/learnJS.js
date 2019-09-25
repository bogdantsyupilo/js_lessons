'use strict';

const mazda = {
    model: 3,
    year: 2006
};

// mazda['color'] = 'blue';


Object.defineProperty(mazda, 'color', {
    value: 'blue',
    writable: true,
    configurable: true,
    enumerable: true
})

delete mazda

console.log(mazda);