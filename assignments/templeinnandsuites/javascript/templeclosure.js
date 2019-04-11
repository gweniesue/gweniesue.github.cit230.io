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
        if (temples[i].temple == "Billings, MT") {
            let myarticlecontainer = document.createElement('div');
            let myarticle = document.createElement('article');
            let myh3 = document.createElement('h3');
            let mypara1 = document.createElement('p');
            let mypara2 = document.createElement('p');
            let mypara3 = document.createElement('p');
            let mypara4 = document.createElement('ul');
            let mypara5 = document.createElement('p');
            let mypara6 = document.createElement('ul');

            
            myh3.textContent = temples[i].temple + " Temple";
            mypara1.textContent = temples[i].address;
            mypara2.textContent = temples[i].citystate;
            mypara3.textContent = temples[i].telephone;
            mypara4.textContent = 'Temple Closures: ' + temples[i].date;
            mypara5.textContent = 'Ordinance Schedule: ' + temples[i].ordinanceschedule;
            mypara6.textContent = 'Services: ' + temples[i].templeservices;

            myarticle.appendChild(myh3);
            myarticle.appendChild(mypara1);
            myarticle.appendChild(mypara2);
            myarticle.appendChild(mypara3);
            myarticle.appendChild(mypara4);
            myarticle.appendChild(mypara5);
            myarticle.appendChild(mypara6);

            datesclosed.appendChild(myarticlecontainer);
            myarticlecontainer.appendChild(myarticle);


        }
    }

}