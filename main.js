'use strict';

let money;

function start(){
    do {
        money = +prompt('Ваш месячный доход', '50000');
    } while(validNumber(money));
}
start();

function validNumber(number) {
    return (isNaN(number) || number === '' || number === null || number === 0);
}
function validString(string) {
    return (!isNaN(string) || string === '' || string === null);
}

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 0,
    period: 3,
    asking: function(){

        if(confirm('Есть ли у вас дополнительный источник заработка?')){
            let itemIncome;
            do {
                itemIncome = prompt('Какой у вас есть доп. заработок?', 'Дизайн');
            } while(validString(itemIncome));
            
            let cashIncome;
            do {
                cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', '5000');
            } while(validNumber(cashIncome));

            appData.income[itemIncome] = cashIncome;
        }

        let addExpenses;
        do {
            addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Квартира, кредит, прочее');
        } while(validString(addExpenses));
        appData.addExpenses = addExpenses.toLowerCase().split(', ');

        let mission;
        do {
            mission = prompt('Сколько вы планируете заработать?', '100000');
        } while(validNumber(mission));
        appData.mission = mission;
        
        appData.deposit = confirm('Есть ли у вас депозит в банке?');

        for( let i = 0; i < 2; i++ ) {
            let questionExpenses;
            do {
                questionExpenses = prompt('Какие обязательные ежемесячные расходы у вас есть?');
            } while(validString(questionExpenses));

            let priceExpenses;
            do {
                priceExpenses = +prompt('Во сколько это обойдется?');
            } while(validNumber(priceExpenses));
        
            appData.expenses[questionExpenses] = priceExpenses;
        }
    },
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    getExpensesMonth: function(){
        for(let i in appData.expenses){
            appData.expensesMonth += appData.expenses[i];
        }
    },
    getBudget: function(){
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },
    getTargetMonth: function(){
        return Math.ceil(appData.mission / appData.budgetMonth);
    },
    getStatusIncome: function(){
        if (appData.budgetDay > 800) {
            return ('У вас высокий уровень дохода');
        } else if (appData.budgetDay > 300 && appData.budgetDay < 800) {
            return ('У вас средний уровень дохода');
        } else if (appData.budgetDay > 0 && appData.budgetDay < 300) {
            return ('У вас низкий уровень дохода');
        } else {
            return ("ОШИБКА: Что-то пошло не так...");
        }
    },
    getInfoDeposit: function(){
        if(appData.deposit === true){
            do {
                appData.percentDeposit = prompt('Какой годовой процент?');
            } while(validNumber(appData.percentDeposit));
            do {
                appData.moneyDeposit = prompt('Какая сумма заложена?');
            } while(validNumber(appData.moneyDeposit));
        }
    },
    calcSavedMoney: function(){
        return appData.budgetMonth * appData.period;
    }
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
    console.log('Ежемесячные расходы: ', appData.expensesMonth);
appData.getTargetMonth();
    console.log('Кол-во месяцев до достижения цели: ', appData.getTargetMonth());
appData.getStatusIncome();
    console.log( appData.getStatusIncome() );
appData.getInfoDeposit();

for (let i in appData) {
    console.log('Наша программа включает в себя данные: ' + i + ' - ' + appData[i]);
}
console.log('--------');
console.log('Объект: ', appData);

console.log('--------');
let arr = [];
for (let i = 0; i < appData.addExpenses.length; i++){
    appData.addExpenses[i] = appData.addExpenses[i].charAt(0).toUpperCase() + appData.addExpenses[i].slice(1);
    arr.push(appData.addExpenses[i]);
}
    console.log(arr.join(', '));