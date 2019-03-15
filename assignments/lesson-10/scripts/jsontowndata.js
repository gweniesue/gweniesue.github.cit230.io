
var output = document.getElementById('towngrid');
          
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
                
            let myArticleContainer=document.createElement('div')
            let myArticle = document.createElement('article');
            let myH2 = document.createElement('h2');
            let myPara1 = document.createElement('p');
            let myPara2 = document.createElement('p');
            let myPara3 = document.createElement('p');
            let myPara4 = document.createElement('p');
            let figure = document.createElement('figure');
            let myimg = document.createElement('img');

                
            myH2.textContent = cities[i].name; 
            myPara1.textContent = '"' + cities[i].motto + '"';
            myPara2.textContent = 'Year Founded: ' + cities[i].yearFounded;
            myPara3.textContent = 'Current Population: ' + cities[i].currentPopulation;
            myPara4.textContent = 'Average Rainfall: ' + cities[i].averageRainfall + ' inches';
            figure.setAttribute('class', 'values');
            myimg.setAttribute('src','images/' + cities[i].name.replace(/\s+/g, '-').toLowerCase() + '.jpg');
            myimg.setAttribute('alt', 'picture of ' + cities[i].name);

            myArticle.appendChild(myH2);
            myArticle.appendChild(myPara1);
            myArticle.appendChild(myPara2);
            myArticle.appendChild(myPara3);
            myArticle.appendChild(myPara4);
            myArticle.appendChild(figure);
            myArticle.appendChild(myimg);
                    
            output.appendChild(myArticleContainer);
            myArticleContainer.appendChild(myArticle); 


            }
        }    
    };
        
        