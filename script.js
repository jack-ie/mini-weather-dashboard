var dataLookup = document.getElementsByClassName('datalookup')
var prevData = document.getElementsByClassName('previousdata')
var dateTime = document.getElementsByClassName('datetime')

var today = dateTime.format('MMMM do, YYYY');


// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=68056ac49e78d598d69105c5cc119b53