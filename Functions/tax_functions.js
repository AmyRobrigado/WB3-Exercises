"use strict"

/* Social Security Tax */

function getSocSecTax(grossPay, taxReturn)
{
    let pay = grossPay;
    let tax = taxReturn;
    let answer = pay / tax

    console.log(answer)
}

getSocSecTax(1400, 6.2);

/* Medicare Tax */
function getMedicareTax(grossPay, medTax)
{
    let pay = grossPay;
    let tax = medTax;
    let answer = pay / tax;

    console.log(answer);
}   

getMedicareTax(2400, 1.45);

/* Federal Tax */
function getFederalTax(grossPay)
{
    let pay = grossPay;
    let tax = withHoldingCode
    

    if (withHoldingCode == 0) {
        tax == 0.23;
    }
    if (withHoldingCode = 1) {
        tax == 0.21;
    }
    if (withHoldingCode = 2) {
        tax == 19.5;
    }
    if (withHoldingCode = 3) {
        tax == 18.5;
    }
    if (withHoldingCode = 4) {
        tax == 0.18;
    }
    else if (withHoldingCode > 4) {
        tax ==  - 1 * 0.05; 
    }
    
    console.log("Gross Pay: $" + pay + " withholding code: " + tax + " Your federal tax return is: $" + answer);
}
getFederalTax(1550, 2);