"use strict";

window.onload = init;

function init()
{
    const confirBtn = document.getElementById("confirBtn");
    confirBtn.onclick = confirBtnOnClicked; 
}

function confirBtnOnClicked()
{
    const confirm = document.getElementById("dateIpt")
    
    let newDate = new Date(confirm.value);

    let dateAlr = document.getElementById("dateAlr");
    dateAlr.innerHTML = newDate.toString();

}