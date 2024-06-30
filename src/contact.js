import telephoneIcon from './asset/telephone.png';
import emailIcon from './asset/mail.png';
import foodIcon from './asset/food-background.png';


export default function contactPage(){
    let content = document.querySelector('#content');
    let contactDiv = document.createElement('div');
    contactDiv.id = 'contact-div';

    let contactInfoDiv = document.createElement('div');
    contactInfoDiv.id = 'contactContainer'

    contactDiv.appendChild(contactInfoDiv);

    let resPhoto = document.createElement('img')
    resPhoto.className = "Res-Photo"
    resPhoto.src = foodIcon

    let resName = document.createElement('div');
    resName.innerText = "Namaste Foods"
    let contactDetailsDiv = document.createElement('div');
    contactDetailsDiv.id = 'details-div';
    
    let PhoneDiv = document.createElement('div');
    let emailDiv = document.createElement('div');

    let phoneImg = document.createElement('img');
    phoneImg.src = telephoneIcon;

    let phoneDetails = document.createElement('p');
    phoneDetails.innerText = '00000000000';

    PhoneDiv.appendChild(phoneImg);
    PhoneDiv.appendChild(phoneDetails);


    let emailImg = document.createElement('img');
    emailImg.src = emailIcon;

    let emailDetails = document.createElement('p');
    emailDetails.innerText = "realEmail@yesyes.com";

    emailDiv.appendChild(emailImg);
    emailDiv.appendChild(emailDetails);



    contactDetailsDiv.appendChild(PhoneDiv);
    contactDetailsDiv.appendChild(emailDiv);


    contactInfoDiv.appendChild(resPhoto);
    contactInfoDiv.appendChild(resName);
    contactInfoDiv.appendChild(contactDetailsDiv);






   content.appendChild(contactDiv)
}