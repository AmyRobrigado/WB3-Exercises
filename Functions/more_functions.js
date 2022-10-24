"use strict";

/* Mailing Label */
function displayMailingLabel(name, address, city, state, zip) {
    console.log("Name: " + name + ", Address: " + address + ", City: " + city +
        ", State: " + state + ", Zip: " + zip);

}

displayMailingLabel("Amy", "231-11 Haverick St", "Dankridge", "New York", "44212");

/* Add Numbers */
function addNumbers(num1, num2) {
    let answer = num1 + num2;
    console.log(answer);
}

addNumbers(34, 10);
addNumbers(12, 40);

/* Receipt */
function displayReceipt(totalDue, amountPaid) {
    let due = totalDue;
    let paid = amountPaid;
    let change = totalDue - amountPaid;

    console.log("Total Due: " + due);
    console.log("Amount Due: " + paid);
    console.log("Change Due: " + change);
}
displayReceipt("$" + 300.00);






