"use strict";

// Custom Date 
    const weekDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ];
    let d = new Date("15 Febuary 2010");
    let day = weekDay[d.getDay()];
    //let weekDay = d.toLocaleString("default", {weekday: "long"})
    


    console.log(d.toDateString);