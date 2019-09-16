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

        this.budget = +salaryAmount.value;

        this.getExpenses();
        this.getIncome();
        this.getAddExpenses();
        this.getAddIncome();
        this.getBudget();
        this.showResult();

        let inputText = document.querySelectorAll('input[type="text"]');
		inputText.forEach(function (item) {
			item.setAttribute('disabled', 'true');
        });
        let checkbox = document.querySelectorAll('input[type="checkbox"]');
		checkbox.forEach(function (item) {
			item.setAttribute('disabled', 'true');
		});
		start.style.display = 'none';
		cancel.style.display = 'block';

		console.log(this);
    },
    reset: function(){
		let inputText = document.querySelectorAll('input[type="text"]');
		let checkbox = document.querySelectorAll('input[type="checkbox"]');
		cancel.style.display = 'none';
		start.style.display = 'block';
		
		inputText.forEach(function (item){
			item.removeAttribute('disabled', 'true');
			item.value = '';
		});
		
		checkbox.forEach(function (item){
			item.removeAttribute('disabled', 'true');	
			item.checked = false;		
		});
	
		budgetMonthValue.value = 0;
		budgetDayValue.value = 0;
		expensesMonthValue.value = 0;
		additionalExpensesValue.value = 'Наименования';
		additionalIncomeValue.value = 'Наименования';
		targetMonthValue.value = 'Срок';
		incomePeriodValue.value = 0;
		periodSelect.value = 1,

		this.income = {},
		this.incomeMonth = 0,
		this.addIncome = [],
		this.expenses = {},
		this.addExpenses = [],
		this.deposit = false,
		this.percentDeposit = 0,
		this.moneyDeposit = 0,
		this.budget = '',
		this.budgetDay = 0,
		this.budgetMonth = 0,
		this.expensesMonth = 0
		
		start.setAttribute('disabled', 'true');
		console.log(this);
	},
    showResult: function(){
        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = this.budgetDay;
        expensesMonthValue.value = this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(', ');
        additionalIncomeValue.value = this.addIncome.join(', ');
        targetMonthValue.value = this.getTargetMonth();
        incomePeriodValue.value = this.calcPeriod();
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
                this.expenses[itemExpenses] = cashExpenses;
            }
            this.expensesMonth += +cashExpenses;
        }, this);
    },
    getIncome: function(){
	     incomeItems.forEach(function (item) {
			let itemIncome = item.querySelector('.income-title').value;
			let cashIncome = item.querySelector('.income-amount').value;
			if (itemIncome !== '' && cashIncome !== '') {
				this.income[itemIncome] = cashIncome;
			}
			this.incomeMonth += +cashIncome;
		}, this);
    },
    getAddExpenses: function(){
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item){
            item = item.trim();
            if(item !== ''){
                this.addExpenses.push(item);
            }
        }, this);
    },
    getAddIncome: function(){
        additionalIncomeItem.forEach(function(item){
            let itemValue = item.value.trim();

            if(itemValue != ''){
                this.addIncome.push(itemValue);
            }
        }, this);
    },
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    getBudget: function(){
        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
        this.budgetDay = Math.floor(this.budgetMonth / 30);
    },
    getTargetMonth: function(){
        return Math.ceil(targetAmount.value / this.budgetMonth);
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
                this.percentDeposit = prompt('Какой годовой процент?');
            } while(validNumber(this.percentDeposit));
            do {
                this.moneyDeposit = prompt('Какая сумма заложена?');
            } while(validNumber(this.moneyDeposit));
        }
    },
    calcPeriod: function(){
        return this.budgetMonth * periodSelect.value;
    }
};

salaryAmount.addEventListener('input', function () {
	if (validNumber(salaryAmount.value)) {
		start.setAttribute('disabled', 'true');
	} else {
		start.removeAttribute('disabled', 'true');
	}
});

start.addEventListener('click', appData.start.bind(appData));
cancel.addEventListener('click', appData.reset.bind(appData));

expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);

periodSelect.addEventListener('input', function () {
	let periodAmount = document.querySelector('.period-amount');
	periodAmount.textContent = periodSelect.value;
});