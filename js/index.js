var day = document.getElementsByClassName('day')[0];
var time = document.getElementsByClassName('time')[0];
var date = new Date();
var mon = date.getMonth() + 1;
var ri = date.getDate();
var week = date.getDay();
var hour = date.getHours();
var min = date.getMinutes();
var second = date.getSeconds();
var hourDiv = document.getElementsByClassName('hourDiv');
var arr = ['日', '一', '二', '三', '四', '五', '六'];
var weeks = null;
if (week === 7) {
    weeks = arr[0];
} else {
    weeks = arr[week];
}
time.innerHTML = hour + ':' + min;
day.innerHTML = mon + '月' + ri + '日 ' + '星期' + weeks;
// hourDiv.innerHTML = hour + ':' + min + ':' + second;
// console.log(time)
for (var i = 0; i < hourDiv.length; i++) {
    hourDiv[i].innerHTML = hour + ':' + min + ':' + second;
}
