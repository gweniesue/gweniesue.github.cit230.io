let weatherforcast = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=4b0104a2ccad6190d3c46e57f9af4100';
weatherforcast.open('Get', apiURLstring, true);
weatherforcast.send();

weatherforcast.onload = function() {
    let forcastinfo = JSON.parse(weatherforcast.responseText); 

    console.log(forcastinfo);

    //
    let hitemp = [];
    let day = 1;
    let pic = [];
    let desc = [];
    for(let i = 1; i < forcastinfo.list.length; i++){
        if (forcastinfo.list[i].dt_txt.includes('18:00:00')) {
            hitemp[day] = forcastinfo.list[i].main.temp_max;
            pic[day] = "http://openweathermap.org/img/w/" + forcastinfo.list[i].weather[0].icon + ".png";
            desc[day] = forcastinfo.list[i].weather[0].description;

            day++;
        }
    }
    for(let i = 1; i <= 5; i++) {
        document.getElementById('hightemp' + i).innerHTML = hitemp[i];
        document.getElementById('currentimage' + i).setAttribute('src', pic[i]);
        document.getElementById('currentimage' + i).setAttribute('alt', desc[i]);
    }
   

  
}