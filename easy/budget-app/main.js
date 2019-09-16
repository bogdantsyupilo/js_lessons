'use strict';

let start = document.getElementById('start');
    console.log(start);

let plus0 = document.getElementsByTagName('button')[0],
    plus1 = document.getElementsByTagName('button')[1];
    console.log(plus0, plus1);

let depositCheck = document.querySelector('#deposit-check');
    console.log(depositCheck);

let additionalIncomeItem = document.querySelectorAll('.additional_income-item');
    console.log(additionalIncomeItem);

let budgetMonthValue = document.querySelector('.budget_month-value'),
    budgetDayValue = document.querySelector('.budget_day-value'),
    expensesMonthValue = document.querySelector('.expenses_month-value'),
	additionalIncomeValue = document.querySelector('.additional_income-value'),
	additionalExpensesValue = document.querySelector('.additional_expenses-value'),
	incomePeriodValue = document.querySelector('.income_period-value'),
    targetMonthValue = document.querySelector('.target_month-value');
    console.log(budgetMonthValue, budgetDayValue, expensesMonthValue, additionalIncomeValue, additionalExpensesValue, incomePeriodValue, targetMonthValue);

let salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelectorAll('.income-title')[1],
    expensesTitle = document.querySelectorAll('.expenses-title')[1],
    expensesAmount = document.querySelector('.expenses-amount'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),
    periodSelect = document.querySelector('.period-select');
    console.log(salaryAmount, incomeTitle, expensesTitle, expensesAmount, additionalExpensesItem, targetAmount, periodSelect);
    