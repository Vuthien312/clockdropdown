function date_time(id) {
  setInterval(() => {
    date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    let remainDayHour = 24 - h;
    let remainDayMinute = 59 - m;
    let remainDaySecond = 59 - s;

    if (remainDayHour < 10) remainDayHour = "0" + remainDayHour;
    if (remainDayMinute < 10) remainDayMinute = "0" + remainDayMinute;
    if (remainDaySecond < 10) remainDaySecond = "0" + remainDaySecond;

    document.getElementById("s").innerHTML = "" + remainDaySecond;
    document.getElementById("m").innerHTML = "" + remainDayMinute;
    document.getElementById("h").innerHTML = "" + remainDayHour;
  }, 1000);
  return true;
}
window.onload = date_time();
