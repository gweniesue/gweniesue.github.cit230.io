let weatherforcast = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&APPID=4b0104a2ccad6190d3c46e57f9af4100';
weatherforcast.open('Get', apiURLstring, true);
weatherforcast.send();

weatherforcast.onload = function() {
    let forecastinfo = JSON.parse(weatherforcast.responseText);
    let hitemp = [];
    let dates = [];
    let pic = [];
    let day = 1; 
    
    for (let i = 1; i < forecastinfo.list.length; i++) {
        
        if (forecastinfo.list[i].dt_txt.includes('18:00:00')) {
            hitemp[day] = forecastinfo.list[i].main.temp_max;
            dates[day] = forecastinfo.list[i].dt_txt;
            pic[day] = forecastinfo.list[i].weather[0].icon;

            day++;
        }
    }
    for (let i = 1; i <= 5; i++) {
        document.getElementById('hightemp' + i).innerHTML = hitemp[i];
        let tempdate = new Date(dates[i]);
        let dayofweek = weekday[tempdate.getDay()];
        document.getElementById('day' + i).innerHTML = dayofweek; 

        let dayicon = pic[i];

        let picrc = "https://openweathermap.org/img/w/" + dayicon + ".png";
        document.getElementById('currentimage' + i).src = picrc;
    }

    
    
}