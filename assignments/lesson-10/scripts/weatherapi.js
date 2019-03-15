let weatherequest = new XMLHttpRequest();
let apistring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=4b0104a2ccad6190d3c46e57f9af4100'
weatherequest.open('Get', apistring, true);
weatherequest.send();

weatherequest.onload = function() {
    let weatherinfo = JSON.parse(weatherequest.responseText);
    console.log(weatherinfo);
    
    document.getElementById('current-temp').innerHTML = weatherinfo.main.temp;
    let icon = "http://openweathermap.org/img/w/" + weatherinfo.weather[0].icon + ".png";
    let desc = weatherinfo.weather[0].description;

    document.getElementById('currentimage').setAttribute('src', icon);
    document.getElementById('currentimage').setAttribute('alt', desc);
}