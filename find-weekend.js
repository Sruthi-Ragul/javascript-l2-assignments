function showDay(d) {
    var day = d.getDay();
    var isWeekend = (day === 6) || (day === 0); 
    console.log("is Weekend-->", isWeekend);
}
console.log(showDay(new Date(2020, 9, 25)));
console.log(showDay(new Date(2020, 9, 19)));