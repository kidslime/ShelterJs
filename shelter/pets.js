const generateRandomIDs = (ArrLength) => {
    let arr = [];
    while (arr.length < ArrLength) {
    let rand = Math.floor(Math.random() * 8);
    arr.indexOf(rand) == -1 && arr.push(rand);
    }
    return arr;
}



const BTN_LEFT = document.querySelector('.slider__button_arrow-prev');
const BTN_RIGHT = document.querySelector('.slider__button_arrow-next');
const CAROUSEL = document.querySelector(".carousel");
const LINE_LEFT = document.querySelector(".slider__line-left");
const LINE_RIGHT = document.querySelector(".slider__line-right");
const LINE_ACTIVE = document.querySelector(".slider__line-active");
const SLIDER_ELEMENTS = document.querySelectorAll('.carousel > .slider__line');
const SLIDER = document.querySelectorAll('.slider > .slider__line');





const pets = [
    `{
      "id": 0,  
      "name": "Jennifer",
      "img": "images/pets-jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    }`,
    `{
        "id": 1, 
      "name": "Sophia",
      "img": "images/pets-sophie.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    }`,
    `{
        "id": 2, 
      "name": "Woody",
      "img": "images/pets-woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    }`,
    `{
        "id": 3, 
      "name": "Scarlett",
      "img": "images/pets-scarlet.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    }`,
    `{
        "id": 4, 
      "name": "Katrine",
      "img": "images/pets-katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    }`,
    `{
        "id": 5, 
      "name": "Timmy",
      "img": "images/pets-timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    }`,
    `{
      "id": 6, 
      "name": "Freddie",
      "img": "images/pets-freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    }`,
    `{
      "id": 7, 
      "name": "Charly",
      "img": "images/pets-charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }`
  ];

  const createCardTemplate = (petId) => {
    const petObj = JSON.parse(pets[petId]);
    const card = document.createElement("div");
    card.innerHTML = `<img src="${petObj.img}" alt="">
    <h3 class="card__title">${petObj.name}</h3>
    <a href="#" class="button button_transparent">Learn more</a>`;
    card.classList.add("card");
    card.setAttribute('id',petId)
    return card;
}

// const generateChosenNumberOfCards = (numberOfCards, targetElem) => {

//     if(targetElem === LINE_ACTIVE) {
//         for (let index = 0; index < numberOfCards; index++) { 
//             console.log(randomCards);
//             const card = createCardTemplate(randomCards[index]);
//             targetElem.appendChild(card);
//         }
//     } else {
//         let newArr = newCardsIDs(randomCards, numberOfCards);
//         newArr.forEach((elem)=>{
//             const card = createCardTemplate(elem);
//             targetElem.appendChild(card);
//         })
//     }
// }

const generateChosenNumberOfCards = (pageCards, targetElem) => {

        for (let index = 0; index < pageCards.length; index++) { 
            const card = createCardTemplate(pageCards[index]);
            targetElem.appendChild(card);
        }
   
}



const NEXT_BTN = document.getElementById('next');
const PREV_BTN = document.getElementById('prev');
const NUM_OF_PAGE = document.getElementById('number-of-page');
const LAST_PAGE = document.getElementById('last');
const FIRST_PAGE = document.getElementById('first');

let numOfCards;
let numOfPage;
if (window.innerWidth > 1260){
    numOfCards = 8;
    numOfPage = 6;
} else if (window.innerWidth <= 1260 && window.innerWidth > 700) {
    numOfCards = 6;
    numOfPage = 8;
} else {
    numOfCards = 3;
    numOfPage = 16;
}
console.log(numOfPage);
let generateGeneralCards = (numOfPage, numOfCards) => {
    let generalCards = []
    for (let index = 0; index < numOfPage; index++) {
        generalCards.push(generateRandomIDs(numOfCards));
        
    }
    return generalCards;
}

FIRST_PAGE.addEventListener('click', () => {
    setDisabled(PREV_BTN)
    setDisabled(FIRST_PAGE)
    setActive(NEXT_BTN)
    setActive(LAST_PAGE)
    let cardsLayout = pageCards[0];
    NUM_OF_PAGE.innerText = 1;
    SLIDER.forEach((elem)=>{
        elem.innerHTML = '';
        generateChosenNumberOfCards(cardsLayout, elem);
    })
    
})

function setDisabled(elem) {
    elem.setAttribute('disabled' ,'');
    elem.classList.add('slider-controlls__btn_disabled')
}
function setActive(elem) {
    elem.removeAttribute('disabled', '')
    elem.classList.remove('slider-controlls__btn_disabled')
}

LAST_PAGE.addEventListener('click', () => {
    setActive(PREV_BTN)
    setActive(FIRST_PAGE)
    setDisabled(NEXT_BTN)
    setDisabled(LAST_PAGE)
    let cardsLayout = pageCards[pageCards.length-1]
    
    
    NUM_OF_PAGE.innerText = pageCards.length;
    SLIDER.forEach((elem)=>{
        elem.innerHTML = '';
        generateChosenNumberOfCards(cardsLayout, elem);
    })
    console.log(+NUM_OF_PAGE.innerText);
    console.log(pageCards.length);
    
})
let firstPage = 1
PREV_BTN.addEventListener('click', () => {
    setActive(NEXT_BTN)
    setActive(LAST_PAGE)
    if( +NUM_OF_PAGE.innerText === firstPage+1 ) {
        setDisabled(PREV_BTN)
        setDisabled(FIRST_PAGE)
    } 
    let numOfPage = +NUM_OF_PAGE.innerText;
    NUM_OF_PAGE.innerText = numOfPage-1;
    
    let prevPage = +NUM_OF_PAGE.innerText-1;
    let cardsLayout = pageCards[prevPage]
    
    SLIDER.forEach((elem)=>{
        elem.innerHTML = '';
        generateChosenNumberOfCards(cardsLayout, elem);
    })
})

NEXT_BTN.addEventListener('click', () => {

    setActive(FIRST_PAGE);
    if( +NUM_OF_PAGE.innerText === 1 ) {
        setActive(PREV_BTN)
    } 
    let numOfPage = +NUM_OF_PAGE.innerText;


   

    console.log(NUM_OF_PAGE.innerText)
    if( +NUM_OF_PAGE.innerText === numOfPage-1 || +NUM_OF_PAGE.innerText === pageCards.length-1) {
        setDisabled(NEXT_BTN)
        setDisabled(LAST_PAGE)
    } 
        NUM_OF_PAGE.innerText = numOfPage+1;
        
        let nextNumOfPage = numOfPage;
        let cardsLayout = pageCards[nextNumOfPage]
        
        SLIDER.forEach((elem)=>{
            elem.innerHTML = '';
            generateChosenNumberOfCards(cardsLayout, elem);
        })

    
    
})

let pageCards = generateGeneralCards(numOfPage, numOfCards);
console.log(pageCards);
window.onload = function(){
    setDisabled(PREV_BTN)
    setDisabled(FIRST_PAGE)
    let page = pageCards[0];

    SLIDER.forEach((elem)=>{
        generateChosenNumberOfCards(page, elem);
    })
    
 
}