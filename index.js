const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(driver){
    console.log(driver.slice(0,2));
   return driver.slice(0,2);
   
}
returnFirstTwoDrivers(drivers)


const returnLastTwoDrivers = function(driver){
    console.log(driver.slice(-2));
    return driver.slice(-2)
}
returnLastTwoDrivers(drivers)


const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];


function createFareMultiplier(fareMultiplier) {
    return function(value) {
      return fareMultiplier * value;
    }
  }

function fareDoubler(fare){
    return fare *2
}
fareDoubler()

function fareTripler(fare){
    return fare *3
}

function selectDifferentDrivers(arrayOfDrivers,returnFirstTwoDrivers){

    return returnFirstTwoDrivers(arrayOfDrivers);
}
selectDifferentDrivers(drivers,returnFirstTwoDrivers)