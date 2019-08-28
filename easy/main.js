'use strict';

let money = prompt('Ваш месячный доход?');
    console.log('Доход: ', money);
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
    console.log('Расходы: ', addExpenses.split(', '));
let deposit = confirm('Есть ли у вас депозит в банке?');
    console.log('Депозит в банке: ', deposit);

    console.log('--------');
    console.log('typeof "money" :', typeof money);
    console.log('typeof "income" :', typeof income);
    console.log('typeof "deposit" :', typeof deposit);
    
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
let mission = parseFloat(prompt('Сколько вы планируете заработать?'));
    console.log('Цель: ', mission);
    console.log('Кол-во месяцев до достижения цели: ', Math.ceil(mission / budgetMonth));
let budgetDay = budgetMonth / 30;
    console.log('Бюджет в день: ', Math.floor(budgetDay));
if(budgetDay >= 800){
    console.log('У вас высокий уровень дохода');
}   else if(budgetDay >=300 && budgetDay < 800){
    console.log('У вас средний уровень дохода');
}   else if(budgetDay >=0 && budgetDay < 300){
    console.log('У вас низкий уровень дохода');
}   else if(budgetDay < 0) {
    console.log('ОШИБКА: Что-то пошло не так...');
}


