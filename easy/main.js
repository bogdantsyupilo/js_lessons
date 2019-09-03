'use strict';

let money;
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
    console.log('Расходы: ', addExpenses.split(', '));
let deposit = confirm('Есть ли у вас депозит в банке?');
    console.log('Депозит в банке: ', deposit);
let mission = parseFloat(prompt('Сколько вы планируете заработать?'));
    console.log('Цель: ', mission);

function start(){
    do {
        money = +prompt('Ваш месячный доход');
        console.log('Доход: ', money);
    } while (isNaN(money) || money === '' || money === null || money <= 0);
}
start();

    console.log('--------');
let showTypeOf = function(data) {
    console.log(typeof data);
};
showTypeOf(money);
showTypeOf(addExpenses);
showTypeOf(deposit);

    console.log('--------');
function getExpensesMonth(){
    let sum = 0;
    let priceExpenses;
    
    for(let i = 0; i < 2; i++){

        if(i === 0){
            let questionStr01 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
                console.log('Вид расходов: ', questionStr01);
        }
        if(i === 1){
            let questionStr02 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
                console.log('Вид расходов: ', questionStr02);
        }

        do {
            priceExpenses = +prompt('Во сколько это обойдется');
            console.log('Сумма: ', sum);
        } while (isNaN(priceExpenses) || priceExpenses === '' || priceExpenses === null || priceExpenses <= 0);

        sum += priceExpenses;
    }

    return sum;
}

let expensesMonth = getExpensesMonth();
        console.log('Сумма всех расходов за месяц: ', expensesMonth );

    console.log('--------');
let budgetMonth = money - expensesMonth;
    console.log('Бюджет на месяц: ', budgetMonth);
let period = Math.ceil(mission / budgetMonth);
    console.log('Кол-во месяцев до достижения цели: ', period);
let budgetDay = Math.floor(budgetMonth / 30);
    console.log('Бюджет в день: ', budgetDay);
    
let getStatusIncome = function() {
    if (budgetDay > 800) {
        return ('У вас высокий уровень дохода');
    } else if (budgetDay > 300 && budgetDay < 800) {
        return ('У вас средний уровень дохода');
    } else if (budgetDay > 0 && budgetDay < 300) {
        return ('У вас низкий уровень дохода');
    } else {
        return ("ОШИБКА: Что-то пошло не так...");
    }
};
    console.log(getStatusIncome());

    console.log('--------');
let accumulatedMonth = function() {
        return money - expensesMonth;
    };
    console.log('Накопления за месяц: ', accumulatedMonth() );

function getTargetMonth() {
    return Math.ceil( mission / accumulatedMonth() );
}

if ( getTargetMonth() > 0 ) {
    console.log('Кол-во месяцев до достижения цели (+ накопления за месяц): ', getTargetMonth() );
} else {
    console.log('Цель не будет достигнута');
}


