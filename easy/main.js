'use strict';

let money;

function start(){
    do {
        money = +prompt('Ваш месячный доход');
    } while (isNaN(money) || money === '' || money === null || money <= 0);
}
start();

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 0,
    asking: function(){
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        appData.addExpenses = addExpenses.toLowerCase().split(', ');

        let mission = parseFloat(prompt('Сколько вы планируете заработать?'));
        appData.mission = mission;
        
        appData.deposit = confirm('Есть ли у вас депозит в банке?');

        for( let i = 0; i < 2; i++ ) {
            let questionExpenses = prompt('Какие обязательные ежемесячные расходы у вас есть?');
            let priceExpenses;
            do {
                priceExpenses = +prompt('Во сколько это обойдется', '500');
            } while (isNaN(priceExpenses) || priceExpenses === '' || priceExpenses === null || priceExpenses <= 0);
        
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
        appData.budgetMonth = money - appData.expensesMonth;
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

for (let i in appData) {
    console.log('Наша программа включает в себя данные: ' + i + ' - ' + appData[i]);
}
console.log('--------')
console.log('Объект: ', appData);