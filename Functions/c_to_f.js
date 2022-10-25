"use strict";

function convertCtoF(currentTemp, fahrenTemp)
{
  let celsius = currentTemp;
  let convertTemp = (celsius * 9/5) + 32; 
console.log(convertTemp);
}
convertCtoF(100);
convertCtoF(45);
convertCtoF(19);
convertCtoF(0);
convertCtoF(-7);
convertCtoF(-40);