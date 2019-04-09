let weatherequest = new XMLHttpRequest();
let apistring = 'https://api.openweathermap.org/data/2.5/weather?id=5066001&units=imperial&APPID=4b0104a2ccad6190d3c46e57f9af4100'
weatherequest.open('Get', apistring, true);
weatherequest.send();

weatherequest.onload = function() {
    let weatherinfo = JSON.parse(weatherequest.responseText);
    
    document.getElementById('current').innerHTML = weatherinfo.weather[0].main;
    document.getElementById('temperature').innerHTML = weatherinfo.main.temp;
    document.getElementById('humidity').innerHTML = weatherinfo.main.humidity;
    document.getElementById('windspeed').innerHTML = weatherinfo.wind.speed;


    let windchilltemp = 35.74 + (0.6215 * weatherinfo.main.temp) - (35.75 * (Math.pow(weatherinfo.wind.speed,0.16))) 
    + 0.4275 * (weatherinfo.main.temp * (Math.pow(weatherinfo.wind.speed,0.16)));
    document.getElementById("windchill").innerHTML = windchilltemp.toFixed(2) + "&deg";


 
}