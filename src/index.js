import './style.css';

import homepage from './home';
import menuPage from './menu';
import contactPage from './contact';



let menuButton = document.querySelector('#menu-page');

let homeButton = document.querySelector('#home-page');

let contact = document.querySelector('#contact-page');

let content = document.querySelector('#content');



menuButton.addEventListener('click',()=>{
    content.innerHTML = '';
    menuPage();
    
});
homeButton.addEventListener('click',()=>{
    content.innerHTML = '';
    homepage();
});
contact.addEventListener('click',()=>{
    content.innerHTML = '';
    contactPage();
})

homepage();






