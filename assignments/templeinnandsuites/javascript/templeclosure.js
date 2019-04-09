let datesclosed = document.querySelector('.datesclosed');

          
const requestURL = "https://gweniesue.github.io/templeclosures.json";
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
console.log();       
request.onload = function() {

    let responsedata = request.response;
    let temples = responsedata['closures'];
    for (let i = 0; i < temples.length; i++) {
        if (temples[i].name == "Billings, MT") {
            let addy = temples[i].address;
            let citystate = temples[i].citystate;
            let phone = temples[i].telephone
            let close = temples[i].date;
            let ordinance = temples[i].ordinaceschedule;

            for (let j = 0; j < date.length; j++) {
                let cdate = date[j];
            }
                for (let k = 0; k < services.length; k++) {
                    let service = service[k]; 
                }   
                
            let myArticle = document.createElement('article');
            let myparagraph = document.createElement('p');

            myparagraph.textContent = event;
            myArticle.appendChild(myparagraph);
            townevents.appendChild(myArticle);  

           
        }
    }

}