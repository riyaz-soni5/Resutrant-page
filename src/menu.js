
import foodBackground from './asset/food-background.png';
import momoPicture from './asset/food-Image/food1.png';
import chatePicture from './asset/food-Image/food2.png';
import thakaliPicture from './asset/food-Image/food3.png';
import jujuPicture from './asset/food-Image/food4.png';
import newariPicture from './asset/food-Image/food5.png';

export default function menuPage(){


    let content = document.querySelector('#content')

    let menuPage = document.createElement('div');
    menuPage.id = 'menu';

    menuPage.style.backgroundImage = `url(${foodBackground})`;
    menuPage.style.backgroundRepeat = 'no-repeat';
    menuPage.style.backgroundSize = 'cover';




    let firstDiv = document.createElement('div')
    firstDiv.className = 'food-item';


    let secDiv = document.createElement('div');
    secDiv.className = 'food-item';

    let thirdDiv = document.createElement('div');
    thirdDiv.className = 'food-item';

    let fourthDiv = document.createElement('div');
    fourthDiv.className = 'food-item';


    let fifthDiv = document.createElement('div');
    fifthDiv.className = 'food-item';



    let foodArr = [firstDiv,secDiv,thirdDiv,fourthDiv,fifthDiv];
    let foodImages = [momoPicture,chatePicture,thakaliPicture,jujuPicture,newariPicture];


    foodArr.forEach((food,index) => { 

        let foodImg = document.createElement('img');
        foodImg.src = foodImages[index]
        foodImg.alt = "Image"+ String(index+1);

        let discriptionDiv = document.createElement('div');
        discriptionDiv.className = 'food-des';

        let foodNameDiv = document.createElement('div');
        let foodPriceDiv = document.createElement('div');

        foodNameDiv.style.backgroundColor = "white";
        foodPriceDiv.style.backgroundColor = 'white';

        discriptionDiv.appendChild(foodNameDiv);
        discriptionDiv.appendChild(foodPriceDiv);

        food.appendChild(foodImg);
        food.appendChild(discriptionDiv);

        switch(index+1){
            case 1:
                foodNameDiv.innerText = "MOMO";
                foodPriceDiv.innerText = "$1.50";
                break;
            case 2:
                foodNameDiv.innerText = "Chatpate";
                foodPriceDiv.innerText = "$1";
                break;
            case 3:
                foodNameDiv.innerText = "Thakali";
                foodPriceDiv.innerText = "$5.25";
                break;
            case 4:
                foodNameDiv.innerText = "JuJu Dhau";
                foodPriceDiv.innerText = "$1";
                break;
            case 5:
                foodNameDiv.innerText = "Newari Khaja Set";
                foodPriceDiv.innerText = "$5";
                break;


        }
        

        menuPage.appendChild(food);
        
    });
    
    content.appendChild(menuPage);
}