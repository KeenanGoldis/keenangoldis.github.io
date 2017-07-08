'use strict';

$(document).ready(function(){

  let currentdate = new Date();
  let datetime = `${currentdate.getDate()}/${(currentdate.getMonth()+1)}/${currentdate.getFullYear()} ${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()}`;
  let date = `${currentdate.getDate()}/${(currentdate.getMonth()+1)}/${currentdate.getFullYear()}`;
  let time = `${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()}`;
  let hour = `${currentdate.getHours()}`;
  let min = `${currentdate.getMinutes()}`;
  let day = `${currentdate.getDay()}`;
  let theDay = '';
  let theTime = '';

//This translates the day number into a string.
  function dayDeclare(day){
    if(day <= 0){
      theDay = 'Sunday'
    } else if(day <= 1){
      theDay = 'Monday'
    } else if(day <= 2){
      theDay = 'Tuesday'
    } else if(day <= 3){
      theDay = 'Wednesday'
    } else if(day <= 4){
      theDay = 'Thursday'
    } else if(day <= 5){
      theDay = 'Friday'
    } else if(day <= 6){
      theDay = 'Saturday'
    } else {
      console.log('something went wrong')
    };
  };
  dayDeclare(day);

  function highlightTodaysDay(dayDeclare){
    if(theDay === 'Sunday'){
      $('#sun h6').css("color", "lime");
    } else if(theDay === 'Monday'){
      $('#mon h6').css("color", "lime");
    } else if(theDay === 'Tuesday'){
      $('#tue h6').css("color", "lime");
    } else if(theDay === 'Wednesday'){
      $('#wed h6').css("color", "lime");
    } else if(theDay === 'Thursday'){
      $('#thu h6').css("color", "lime");
    } else if(theDay === 'Friday'){
      $('#fri h6').css("color", "lime");
    } else if(theDay === 'Saturday'){
      $('#sat h6').css("color", "lime");
    } else {
      console.log('something went wrong');
    }
  }
  highlightTodaysDay();

  function hourMinDeclare(hourDeclare, minDeclare){
    let theHour = ''
    let theMin = ''
    let theTime = theHour.concat(theMin);

    function hourDeclare(hour){
      if (hour <= 0){
        theHour = '00';
      } else if (hour <= 1){
        theHour = '01';
      } else if (hour <= 2){
        theHour = '02';
      } else if (hour <= 3){
        theHour = '03';
      } else if (hour <= 4){
        theHour = '04';
      } else if (hour <= 5){
        theHour = '05';
      } else if (hour <= 6){
        theHour = '06';
      } else if (hour <= 7){
        theHour = '07';
      } else if (hour <= 8){
        theHour = '08';
      } else if (hour <= 9){
        theHour = '09';
      } else if (hour <= 10){
        theHour = '10';
      } else if (hour <= 11){
        theHour = '11';
      } else if (hour <= 12){
        theHour = '12';
      } else if (hour <= 13){
        theHour = '13';
      } else if (hour <= 14){
        theHour = '14';
      } else if (hour <= 15){
        theHour = '15';
      } else if (hour <= 16){
        theHour = '16';
      } else if (hour <= 17){
        theHour = '17';
      } else if (hour <= 18){
        theHour = '18';
      } else if (hour <= 19){
        theHour = '19';
      } else if (hour <= 20){
        theHour = '20';
      } else if (hour <= 21){
        theHour = '21';
      } else if (hour <= 22){
        theHour = '22';
      } else if (hour <= 23){
        theHour = '23';
      }
    }
    hourDeclare(hour);

    function minDeclare(min){
      if (min <= 0){
        theMin = '00';
      } else if (min <= 5){
        theMin = '05';
      } else if (min <= 10){
        theMin = '10';
      } else if (min <= 15){
        theMin = '15';
      } else if (min <= 20){
        theMin = '20';
      } else if (min <= 25){
        theMin = '25';
      } else if (min <= 30){
        theMin = '30';
      } else if (min <= 35){
        theMin = '35';
      } else if (min <= 40){
        theMin = '40';
      } else if (min <= 45){
        theMin = '45';
      } else if (min <= 50){
        theMin = '50';
      } else if (min <= 55){
        theMin = '55';
      } else if (min <= 59){
        theMin = '59';
      }
    }
    minDeclare(min);

    theTime= (theHour.concat(theMin));

    function trailerIsOpen(){
      if ((theDay === 'Sunday') && (theTime <='0230' || theTime >='1100')){
        return true;
      } else if (theDay === 'Monday'){
        return false;
      } else if ((theDay === 'Tuesday') && (theTime >='1700')){
        return true;
      } else if ((theDay === 'Wednesday') && (theTime >='1700')){
        return true;
      } else if ((theDay === 'Thursday') && (theTime >='1700')){
        return true;
      } else if ((theDay === 'Friday') && (theTime <='0230'||theTime >='1700')){
        return true;
      } else if ((theDay === 'Saturday') && (theTime <='0230'||theTime >='1700')){
        return true;
      } else {
        return false;
      }
    }
    trailerIsOpen();

    function yesWeAreOpen(){
      if (trailerIsOpen = true){
          $("#closedTrailer").hide();
        }
      else if (trailerIsOpen = false){
        $("#openTrailer").hide();
      }
    }
    yesWeAreOpen();

  }
  hourMinDeclare();
});
