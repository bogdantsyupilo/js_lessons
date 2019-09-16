'use strict';

let start = document.getElementById('start'),
    cancel = document.getElementById('cancel'),
    incomePlus = document.getElementsByTagName('button')[0],
    expensesPlus = document.getElementsByTagName('button')[1],
    depositCheck = document.querySelector('#deposit-check'),
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    budgetMonthValue = document.querySelector('.budget_month-value'),
    budgetDayValue = document.querySelector('.budget_day-value'),
    expensesMonthValue = document.querySelector('.expenses_month-value'),
	additionalIncomeValue = document.querySelector('.additional_income-value'),
    additionalExpensesValue = document.querySelector('.additional_expenses-value'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
	incomePeriodValue = document.querySelector('.income_period-value'),
    targetMonthValue = document.querySelector('.target_month-value'),
    salaryAmount = document.querySelector('.salary-amount'),
    incomeItems = document.querySelectorAll('.income-items'),
    incomeTitle = document.querySelectorAll('.income-title'),
    incomeAmount = document.querySelectorAll('.income-amount'),
    expensesTitle = document.querySelectorAll('.expenses-title'),
    expensesAmount = document.querySelectorAll('.expenses-amount'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    targetAmount = document.querySelector('.target-amount'),
    periodSelect = document.querySelector('.period-select');
    console.log(expensesTitle, incomeTitle);

function validNumber(number) {
    return (isNaN(number) || number === '' || number === null || number === 0);
}
function validString(string) {
    return (!isNaN(string) || string === '' || string === null);
}

let appData = {
    income: {},
    incomeMonth: 0,
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    period: 3,
    start: function(){

        appData.budget = +salaryAmount.value;

        appData.getExpenses();
        appData.getIncome();
        appData.getAddExpenses();
        appData.getAddIncome();
        appData.getBudget();
        appData.showResult();

        let inputText = document.querySelectorAll('input[type="text"]');
		inputText.forEach(function (item) {
			item.setAttribute('disabled', 'true');
		});
		start.style.display = 'none';
		cancel.style.display = 'block';

		console.log(appData);
    },
    cancel: function(){
        let inputText = document.querySelectorAll('input[type="text"]');
		inputText.forEach(function (item) {
			item.removeAttribute('disabled');
		});
        start.style.display = 'block';
		cancel.style.display = 'none';
    },
    showResult: function(){
        budgetMonthValue.value = appData.budgetMonth;
        budgetDayValue.value = appData.budgetDay;
        expensesMonthValue.value = appData.expensesMonth;
        additionalExpensesValue.value = appData.addExpenses.join(', ');
        additionalIncomeValue.value = appData.addIncome.join(', ');
        targetMonthValue.value = appData.getTargetMonth();
        incomePeriodValue.value = appData.calcPeriod();
    },
    addExpensesBlock: function(){
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
        expensesTitle[1].value = '';
        expensesAmount[0].value = '';
        expensesItems = document.querySelectorAll('.expenses-items');
        if(expensesItems.length === 3){
            expensesPlus.style.display = 'none';
        }
    },
    addIncomeBlock: function () {
        let cloneIncomesItem = incomeItems[0].cloneNode(true);
        incomeTitle[1].value = '';
        incomeAmount[0].value = '';
		incomeItems[0].parentNode.insertBefore(cloneIncomesItem, incomePlus);
		incomeItems = document.querySelectorAll('.income-items');
		if (incomeItems.length === 3) {
			incomePlus.style.display = 'none';
		}
	},
    getExpenses: function(){
        expensesItems.forEach(function(item){
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if(itemExpenses !== '' && cashExpenses !== ''){
                appData.expenses[itemExpenses] = cashExpenses;
            }
            appData.expensesMonth += +cashExpenses;
        });
    },
    getIncome: function(){
	     incomeItems.forEach(function (item) {
			let itemIncome = item.querySelector('.income-title').value;
			let cashIncome = item.querySelector('.income-amount').value;
			if (itemIncome !== '' && cashIncome !== '') {
				appData.income[itemIncome] = cashIncome;
			}
			appData.incomeMonth += +cashIncome;
		});
    },
    getAddExpenses: function(){
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item){
            item = item.trim();
            if(item !== ''){
                appData.addExpenses.push(item);
            }
        });
    },
    getAddIncome: function(){
        additionalIncomeItem.forEach(function(item){
            let itemValue = item.value.trim();

            if(itemValue != ''){
                appData.addIncome.push(itemValue);
            }
        });
    },
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    getBudget: function(){
        appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },
    getTargetMonth: function(){
        return Math.ceil(targetAmount.value / appData.budgetMonth);
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
    calcPeriod: function(){
        return appData.budgetMonth * periodSelect.value;
    }
};

salaryAmount.addEventListener('input', function () {
	if (validNumber(salaryAmount.value)) {
		start.setAttribute('disabled', 'true');
	} else {
		start.removeAttribute('disabled', 'true');
	}
});

start.addEventListener('click', appData.start);
cancel.addEventListener('click', appData.cancel);

expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);

periodSelect.addEventListener('input', function () {
	let periodAmount = document.querySelector('.period-amount');
	periodAmount.textContent = periodSelect.value;
});