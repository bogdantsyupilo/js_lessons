'use strict';

let start = document.getElementById('start'),
    cancel = document.getElementById('cancel'),
    incomePlus = document.getElementsByTagName('button')[0],
    expensesPlus = document.getElementsByTagName('button')[1],
    depositCheck = document.querySelector('#deposit-check'),
    depositBank = document.querySelector('.deposit-bank'),
    depositAmount = document.querySelector('.deposit-amount'),
    depositPercent = document.querySelector('.deposit-percent'),
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    budgetMonthValue = document.querySelector('.budget_month-value'),
    budgetDayValue = document.querySelector('.budget_day-value'),
    expensesMonthValue = document.querySelector('.expenses_month-value'),
	additionalIncomeValue = document.querySelector('.additional_income-value'),
    additionalExpensesValue = document.querySelector('.additional_expenses-value'),
    additionalExpensesItem = document.querySelectorAll('.additional_expenses-item'),
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

function validNumber(number) {
    return (isNaN(number) || number === '' || number === null || number === 0);
}
function validString(string) {
    return (!isNaN(string) || string === '' || string === null);
}

class AppData {
    constructor() {
        this.income = {};
        this.incomeMonth = 0;
        this.addIncome = [];
        this.expenses = {};
        this.addExpenses = [];
        this.deposit = false;
        this.percentDeposit = 0;
        this.moneyDeposit = 0;
        this.period = 3;
        this.budgetDay = 0;
        this.budgetMonth = 0;
        this.expensesMonth = 0;
    }
    check() {
        if (validNumber(salaryAmount.value)) {
            start.setAttribute('disabled', 'true');
        } else {
            start.removeAttribute('disabled', 'true');
        }
    }
    start() {
        this.budget = +salaryAmount.value;
        this.getExpenses();
        this.getIncome();
        this.getInfoDeposit();
        this.getAdd(additionalExpensesItem, this.addExpenses);
        this.getAdd(additionalIncomeItem, this.addIncome);
        this.getBudget();
        this.showResult();
    
        let inputText = document.querySelectorAll('input[type="text"]');
        inputText.forEach((item) => {
            item.setAttribute('disabled', 'true');
        });
        let checkbox = document.querySelectorAll('input[type="checkbox"]');
        checkbox.forEach((item) => {
            item.setAttribute('disabled', 'true');
        });
        let depositSelect = document.querySelector('.deposit-bank');
        depositSelect.setAttribute('disabled', 'true');
        start.style.display = 'none';
        cancel.style.display = 'block';
    }
    reset() {
        let inputText = document.querySelectorAll('input[type="text"]');
        let checkbox = document.querySelectorAll('input[type="checkbox"]');
        let depositSelect = document.querySelector('.deposit-bank');
        cancel.style.display = 'none';
        start.style.display = 'block';
        
        inputText.forEach((item) => {
            item.removeAttribute('disabled', 'true');
            item.value = '';
        });
        
        checkbox.forEach((item) => {
            item.removeAttribute('disabled', 'true');	
            item.checked = false;		
        });
    
        depositSelect.removeAttribute('disabled', 'true');
    
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
    }
    showResult() {
        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = this.budgetDay;
        expensesMonthValue.value = this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(', ');
        additionalIncomeValue.value = this.addIncome.join(', ');
        targetMonthValue.value = this.getTargetMonth();
        incomePeriodValue.value = this.calcPeriod();
    }
    getAdd(elem, prop) {
        const _this = this;

        elem.forEach((item) => {
            if(elem === additionalIncomeItem) {
                item = item.value.trim();
            } else if (elem === additionalExpensesItem) {
                item = item.value.trim();
            }
            item = item.trim();
            if(item !== '') {
                prop.push(item);
            }
            return item
        });
    }
    add() {
        item = document.querySelectorAll(item);
        plus = document.querySelector(plus);
        let cloneExpensesItem = item[0].cloneNode(true);
        item[0].parentNode.insertBefore(cloneExpensesItem, plus);
        item = document.querySelectorAll(getClass);
        
        if (item.length === 3) {
            plus.style.display = 'none';
        }
    }
    getExpenses() {
        const _this = this;
        expensesItems.forEach((item) => {
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if(itemExpenses !== '' && cashExpenses !== ''){
                _this.expenses[itemExpenses] = cashExpenses;
            }
            _this.expensesMonth += +cashExpenses;
        }, this);
    }
    getIncome() {
        const _this = this;
        incomeItems.forEach((item) => {
            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;
            if (itemIncome !== '' && cashIncome !== '') {
                _this.income[itemIncome] = cashIncome;
            }
            _this.incomeMonth += +cashIncome;
        }, this);
    }
    getBudget() {
        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth + (this.moneyDeposit * this.percentDeposit)/12;
        this.budgetDay = Math.floor(this.budgetMonth / 30);
    }
    getTargetMonth() {
        return Math.ceil(targetAmount.value / this.budgetMonth);
    }
    getStatusIncome() {
        const _this = this;
        if (_this.budgetDay > 800) {
            return ('У вас высокий уровень дохода');
        } else if (_this.budgetDay > 300 && _this.budgetDay < 800) {
            return ('У вас средний уровень дохода');
        } else if (_this.budgetDay > 0 && _this.budgetDay < 300) {
            return ('У вас низкий уровень дохода');
        } else {
            return ("ОШИБКА: Что-то пошло не так...");
        }
    }
    getInfoDeposit() {
        if(this.deposit){
            this.percentDeposit = depositPercent.value;
            this.moneyDeposit = depositAmount.value;
        }
    }
    calcPeriod() {
        return this.budgetMonth * periodSelect.value;
    }
    eventsListeners() {
        const _this = this;

        document.querySelector('.btn_plus.income_add').addEventListener('click', () => {
            _this.add('.income-items', '.btn_plus.income_add', '.income-items');
        });
        document.querySelector('.btn_plus.expenses_add').addEventListener('click', () => {
            _this.add('.expenses-items', '.btn_plus.expenses_add', '.expenses-items');
        });
        periodSelect.addEventListener('input', function () {
            let periodAmount = document.querySelector('.period-amount');
            periodAmount.textContent = periodSelect.value;
        });
        depositCheck.addEventListener('change', function(){
            if(depositCheck.checked){
                depositBank.style.display = 'inline-block';
                depositAmount.style.display = 'inline-block';
                _this.deposit = true;
                depositBank.addEventListener('change', function(){
                    let selectIndex = this.options[this.selectedIndex].value;
                    if(selectIndex === 'other'){
                        depositPercent.style.display = 'inline-block';
                        depositPercent.removeAttribute('disabled', 'true');
                        depositPercent.value = '';
                    } else{
                        depositPercent.style.display = 'none';
                        depositPercent.value = selectIndex;
                    }
                });
            } else{
                depositBank.style.display = 'none';
                depositAmount.style.display = 'none';
                depositAmount.value = '';
                _this.deposit = 'false';
            }
        });
        start.addEventListener('click', _this.start.bind(_this));
        cancel.addEventListener('click', _this.reset.bind(_this));
    }
}

const appData = new AppData();

appData.eventsListeners();