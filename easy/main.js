'use strict';

let money = prompt('Ваш месячный доход?');
    console.log('Доход: ', money);
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
    console.log('Расходы: ', addExpenses.split(', '));
let deposit = confirm('Есть ли у вас депозит в банке?');
    console.log('Депозит в банке: ', deposit);
let mission = parseFloat(prompt('Сколько вы планируете заработать?'));
    console.log('Цель: ', mission);

    console.log('--------');
let showTypeOf = function(data) {
    console.log(typeof data);
};
showTypeOf(money);
showTypeOf(addExpenses);
showTypeOf(deposit);

    console.log('--------');
let questionStr01 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
    console.log('Вид расходов: ', questionStr01);
let questionNum01 = parseFloat(prompt('Во сколько это обойдется?'));
    console.log('Сумма: ', questionNum01);
let questionStr02 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
    console.log('Вид расходов: ', questionStr02);
let questionNum02 = parseFloat(prompt('Во сколько это обойдется?'));
    console.log('Сумма: ', questionNum02);

    console.log('--------');
let budgetMonth = money - (questionNum01 + questionNum02);
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
function getExpensesMonth() {
    return questionNum01 + questionNum02;
}
    console.log('Сумма всех расходов за месяц: ', getExpensesMonth() );
let accumulatedMonth = function() {
        return money - questionNum01 - questionNum02;
    };
    console.log('Накопления за месяц: ', accumulatedMonth() );
function getTargetMonth() {
    return Math.ceil( mission / accumulatedMonth() );
}
    console.log('Кол-во месяцев до достижения цели (+ накопления за месяц): ', getTargetMonth() );


