// Variables
let money = 40000;
let income = '10000';
let addExpenses = 'Gas, Phone, Credit';
let deposit = true;
let mission = '100000';
let period = '9';

// Methods and properties
console.log('typeof money: ', typeof money);
console.log('typeof income: ', typeof income);
console.log('typeof deposit: ', typeof deposit);

console.log('length of income: ', income.length);

console.log ('period:', period, '| mission:', '₽' + mission);

newAddExpenses = addExpenses.toLowerCase();
console.log('addExpenses to lower case: ', newAddExpenses);
console.log('split addExpenses in lower case into array: ', newAddExpenses.split(', '));

budgetDay = money / 30;
console.log('budgetDay: ', budgetDay, '| %: ', money % 30);