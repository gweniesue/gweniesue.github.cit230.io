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

            let mypara4 = document.createElement('ul');



            let closing = temples[i].date;
            for (let j = 0; j < closing.length; j++) {
                let closelist = document.createElement('li');
                closelist.textContent = closing[j];
                mypara4.appendChild(closelist);
            }


            myarticle.appendChild(mypara4);

            datesclosed.appendChild(myarticlecontainer);
            myarticlecontainer.appendChild(myarticle);


        }
    }

}