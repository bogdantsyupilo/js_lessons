window.addEventListener('DOMContentLoaded', function(){
    'use strict';

    //Date
    function dateBlock(){
        let date = new Date()
        let welcome = document.querySelector('#welcome'),
            dayNow = document.querySelector('#dayNow'),
            timeNow = document.querySelector('#timeNow'),
            newYearDay = '1 January ' + (date.getFullYear() + 1),
            newYearTimer = document.querySelector('#newYearTimer');
        
        function getDate(){
            let newYear = new Date(newYearDay);

            let weekDay = 'Воскресенье, Понедельник, Вторник, Среда, Четверг, Пятница, Суббота';
            weekDay = weekDay.split(',');
            weekDay = weekDay[date.getDay()];
            
            let timeRemaining = (newYear - date) / 1000, 
                days = Math.floor(timeRemaining / 60 / 60 / 24),
                hours = date.getHours(),
                minutes = date.getMinutes(),
                seconds = date.getSeconds(),
                timeOfDay = (hours >= 12) ? ' PM' : ' AM';
            
                hours = (hours >= 12) ? hours - 12 : hours;
            
            return {hours, minutes, seconds, weekDay, days, timeOfDay}
        }
        function getZero(time){
            if(time > 0 && time < 10){
                return '0' + time;
            } else {
                return time;
            }
        }

        let dateNow = getDate();
        
        function showDate(){
            timeNow.textContent = `Текущее время : ${getZero(dateNow.hours)}:${getZero(dateNow.minutes)}:${getZero(dateNow.seconds)} ${getZero(dateNow.timeOfDay)}`;
        
            if (dateNow.hours >= 4 && dateNow.hours < 11) {
                welcome.textContent = `Доброе утро!`;
            } else if (dateNow.hours >= 11 && dateNow.hours < 17) {
                welcome.textContent = `Доброый день!`;
            } else if (dateNow.hours >= 17 && dateNow.hours < 22) {
                welcome.textContent = `Добрый вечер!`;
            } else if (dateNow.hours >= 22 && dateNow.hours < 4) {
                welcome.textContent = `Доброй ночи!`;
            }

            dayNow.textContent = `Сегодня : ${dateNow.weekDay}`;
            newYearTimer.textContent = `До нового года осталось : ${dateNow.days} дней`
        }
        showDate();
    }
    setInterval(dateBlock, 1000);
});