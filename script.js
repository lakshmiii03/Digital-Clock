function clock() {
 var meridiem = 'AM'
 var time = new Date(),
  hours = time.getHours(),
  minutes = time.getMinutes(),
  seconds = time.getSeconds();

 document.querySelectorAll('.clock')[0].innerHTML =
  hour(hours) + ":" + minsec(minutes) + ":" + minsec(seconds) + " " + meridiem;


 // function for formatting minutes and seconds
 function minsec(ms) {
  if (ms < 10) {
   ms = '0' + ms;
  }
  return ms;
 }


 //function for formatting hours
 function hour(hr) {
  if (hr > 12) {
   hr = hr - 12
   meridiem = 'PM'
   return '0' + hr
  } else {
   meridiem = 'AM'
  }
  
  return hr;
 }
 
}
setInterval(clock, 1000);