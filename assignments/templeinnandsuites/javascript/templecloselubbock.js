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
        if (temples[i].temple == "Lubbock, TX") {
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

            let closing = temples[i].date;
            for (let j = 0; j < closing.length; j++) {
                let closelist = document.createElement('li');
                closelist.textContent = closing[j];
                mypara4.appendChild(closelist);
            }
            
            mypara5.textContent = 'Ordinance Schedule: ' + temples[i].ordinanceschedule;

            let serving = temples[i].templeservices;
            for (let k = 0; k < serving.length; k++) {
                let servelist = document.createElement('li');
                servelist.textContent = serving[k];
                mypara6.appendChild(servelist);
            }

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