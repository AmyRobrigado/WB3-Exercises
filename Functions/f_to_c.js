"use strict";

function convertFtoC(currentTemp, celsiusTemp)
{
  let fahrenheit = currentTemp;
  let convertTemp = (fahrenheit - 32) * 5/9; 
console.log(convertTemp);
}
convertFtoC(212);
convertFtoC(90);
convertFtoC(72);
convertFtoC(32);
convertFtoC(0);
convertFtoC(-40);