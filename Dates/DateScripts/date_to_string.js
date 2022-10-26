"use strict";

window.onload = init;

//1
function init() {
    const confirBtn = document.getElementById("confirBtn");
    confirBtn.onclick = confirBtnOnClicked;
}

function confirBtnOnClicked() {
    const confirm = document.getElementById("dateIpt");

    let newDate = new Date(confirm.value);

    let dateAlr = document.getElementById("dateAlr");
    //toString()
    dateAlr.innerHTML = newDate.toString();
}

//2
function init() {
    const confirBtn = document.getElementById("confirBtn");
    confirBtn.onclick = confirBtnOnClicked;
}


function confirBtnOnClicked() {
    const confirm = document.getElementById("dateIpt")

    let newDate = new Date(confirm.value);

    let dateAlr = document.getElementById("dateAlr");
    //toDateString()
    dateAlr.innerHTML = newDate.toDateString();
}

//3
function init() {
    const confirBtn = document.getElementById("confirBtn");
    confirBtn.onclick = confirBtnOnClicked;
}


function confirBtnOnClicked() {
    const confirm = document.getElementById("dateIpt")

    let newDate = new Date(confirm.value);

    let dateAlr = document.getElementById("dateAlr");
    //toUTCString()
    dateAlr.innerHTML = newDate.toUTCString();
}

//4
function init() {
    const confirBtn = document.getElementById("confirBtn");
    confirBtn.onclick = confirBtnOnClicked;
}


function confirBtnOnClicked() {
    const confirm = document.getElementById("dateIpt")

    let newDate = new Date(confirm.value);

    let dateAlr = document.getElementById("dateAlr");
    //toLocalString()
    dateAlr.innerHTML = newDate.toLocaleString();
}

