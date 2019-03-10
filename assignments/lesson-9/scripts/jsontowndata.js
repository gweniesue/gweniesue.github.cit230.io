
var output = document.querySelector('div');
          
          const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
          let request = new XMLHttpRequest();
          request.open('GET', requestURL);
          request.responseType = 'json';
          request.send();
            
          request.onload = function() {


            let jsondata = request.response;
            let cities = jsondata['towns'];
            for (let i = 0; i < cities.length; i++) {
                
                if(cities[i].name == 'Preston' || cities[i].name == 'Fish Haven' || cities[i].name == 'Soda Springs') {
                
                let city = document.createElement('h3');
                city.textContent = cities[i].name;
                let motto = document.createElement('p');
                motto.textContent = '"' + cities[i].motto + '"';
                let yearfounded = document.createElement('p');
                yearfounded.textContent = 'Year Founded: ' + cities[i].yearFounded;
                let currentpopulation = document.createElement('p');
                currentpopulation.textContent = 'Current Population: ' + cities[i].currentPopulation;
                let averagerainfall = document.createElement('p');
                averagerainfall.textContent = 'Average Rainfall: ' + cities[i].averageRainfall + ' inches';

                
                
                output.appendChild(city);
                output.appendChild(motto);
                output.appendChild(yearfounded);
                output.appendChild(currentpopulation);
                output.appendChild(averagerainfall);
                
                
            }
               
        }    
    };
        
        