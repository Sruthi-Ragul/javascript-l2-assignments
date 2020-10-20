function timezoneDifference(dt) 
{ 
   return -dt.getTimezoneOffset()/60;
}

var date = new Date(); 
console.log("GMT Difference in hours-->",timezoneDifference(date)); 