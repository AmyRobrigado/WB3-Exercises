"use strict";

/* Mailing Label */
function displayMailingLabel(name, address, city, state, zip) {
    console.log("Name: " + name + ", Address: " + address + ", City: " + city +
        ", State: " + state + ", Zip: " + zip);

}

displayMailingLabel("Amy", "231-11 Haverick St", "Dankridge", "New York", "44212");
displayMailingLabel("Betty", "231-11 Haverick St", "Dankridge", "New York", "44212");
displayMailingLabel("Sherry", "231-11 Haverick St", "Dankridge", "New York", "44212");


/* Add Numbers */
function addNumbers(num1, num2) {
    let answer = num1 + num2;
    console.log(answer);
}

addNumbers(34, 10);
addNumbers(12, 40);
addNumbers(13, 24);

/* Receipt */
function displayReceipt(totalDue, amountPaid, changeDue) {
    let due = totalDue;
    let paid = amountPaid;
    let change = changeDue;

    console.log("Total Due: " + due + ", Amount Due: " + paid + " Change Due: " + change);
    
}
displayReceipt("$" + 300.00, "$" + 300.00, "$" + 0);
displayReceipt("$" + 300.00, "$" + 400.00, "$" + 0);
displayReceipt("$" + 300.00, "$" + 240.00, "$" + 140.00);











