
export default function homepage(){

    let homePage = document.createElement('div');
    
    homePage.id = 'home-content';

    let content = document.getElementById('content');

    let openingHourDiv = document.createElement('div');

    openingHourDiv.id = "opening-hour"

    openingHourDiv.innerHTML = '<h1>The Opening Hours</h1> <p>Monday:8AM-8PM</p><p>Tuesday:8AM-8PM</p><p>Wednesday:8AM-8PM</p><p>Thursday:8AM-8PM</p><p>Friday:8AM-4PM</p><p>Saturday:CLOSED</p><p>Sunday:8AM-8PM</p>';


    let welcomePic = document.createElement('img');

    welcomePic.src = '/src/asset/namaste.jpg';


    homePage.appendChild(openingHourDiv);
    homePage.appendChild(welcomePic);


    content.appendChild(homePage);
}