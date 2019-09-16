// Variables
let currentDate = new Date(),
    rightNow,
    year = currentDate.getFullYear(),
    month = currentDate.getMonth(),
    date = currentDate.getDate(),
    hours = currentDate.getHours(),
    minutes = currentDate.getMinutes(),
    seconds = currentDate.getSeconds();
// Zero before number
function getZeroBefore(num){
    if(num > 0 && num < 10){
        return '0' + num;
    } else{
        return num;
    }
}
// Current time and date
rightNow = 'Текущая дата и время: ' + getZeroBefore(hours) + ':' + getZeroBefore(minutes) + ':' + getZeroBefore(seconds) + ', ' + getZeroBefore(date) + '.' + getZeroBefore(month) + '.' + year;

document.write(rightNow);