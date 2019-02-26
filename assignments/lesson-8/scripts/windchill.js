
let tempfarenheit = parseFloat(document.getElementById('temperature').innerHTML);
let speed = parseFloat(document.getElementById('windspeed').innerHTML);
let windchilltemp = 35.74 + (0.6215 * tempfarenheit) - (35.75 * (Math.pow(speed,0.16))) 
    + 0.4275 * (tempfarenheit * (Math.pow(speed,0.16)));
document.getElementById("windchill").innerHTML = windchilltemp.toFixed(2) + "&deg";

