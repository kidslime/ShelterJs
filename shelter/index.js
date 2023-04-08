const HAMBURGER = document.querySelector('.hamburger');
const MENU = document.querySelector('.menu')
const MENU_LINK = document.querySelectorAll('.menu__link')
const BODY = document.querySelector('body')
console.log(BODY)
window.addEventListener('click', function (e) {
    if (!MENU.contains(e.target) && !HAMBURGER.contains(e.target)) {
        MENU.classList.remove('open');
        HAMBURGER.classList.toggle('rotate')
        BODY.classList.remove('unscroll')
    }
});

HAMBURGER.addEventListener('click', ()=> {
    MENU.classList.toggle('open')
    HAMBURGER.classList.toggle('rotate')
    BODY.classList.toggle('unscroll')
})

MENU.addEventListener('click', (e)=>{
  if(e.target.classList['value'] === 'menu__link'){
    MENU.classList.remove('open');
    HAMBURGER.classList.toggle('rotate')
    BODY.classList.toggle('unscroll')
  }
})






const BTN_LEFT = document.querySelector('.slider__button_arrow-prev');
const BTN_RIGHT = document.querySelector('.slider__button_arrow-next');
const CAROUSEL = document.querySelector(".carousel");
const LINE_LEFT = document.querySelector(".slider__line-left");
const LINE_RIGHT = document.querySelector(".slider__line-right");
const LINE_ACTIVE = document.querySelector(".slider__line-active");
const SLIDER_ELEMENTS = document.querySelectorAll('.carousel > .slider__line');
const NUMBER_OF_CARDS_DESKTOP = 3;




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
  let sliderCount = 0,
    sliderWidth;




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

  
const generateRandomIDs = (ArrLength) => {
    let arr = [];
    while (arr.length < ArrLength) {
    let rand = Math.floor(Math.random() * 8);
    arr.indexOf(rand) == -1 && arr.push(rand);
    }
    return arr;
}
const arrAllIDs = [0,1,2,3,4,5,6,7];

const newCardsIDs = (currentCardsIDs, numberUniqCards) => {
    const s = new Set(currentCardsIDs);
    return newArr = arrAllIDs.filter(e => !s.has(e)).sort(() => 0.5 - Math.random()).slice(0,numberUniqCards);
}

let randomCards = generateRandomIDs(3);
const generateChosenNumberOfCards = (numberOfCards, targetElem) => {

    if(targetElem === LINE_ACTIVE) {
        console.log(randomCards);
        for (let index = 0; index < numberOfCards; index++) { 
            const card = createCardTemplate(randomCards[index]);
            targetElem.appendChild(card);
        }
    } else {
        let newArr = newCardsIDs(randomCards, numberOfCards);
        console.log(newArr);
        newArr.forEach((elem)=>{
            const card = createCardTemplate(elem);
            targetElem.appendChild(card);
        })
    }
}


const DESKTOP = window.matchMedia('(min-width: 1280px)');
const TABLET = window.matchMedia('(min-width: 768px) and (max-width: 1279px)');

let sliderLine;

window.onload = function(){
    // const randomCards = generateRandomIDs(3);
    // console.log('active',randomCards);
    if (TABLET.matches) {
        randomCards = generateRandomIDs(2);
        SLIDER_ELEMENTS.forEach((elem)=>{
            generateChosenNumberOfCards(2, elem);
        })
    } else if(DESKTOP.matches) {
      randomCards = generateRandomIDs(3);
      SLIDER_ELEMENTS.forEach((elem)=>{
          generateChosenNumberOfCards(3, elem);
      })
    } else {
      randomCards = generateRandomIDs(1);
      SLIDER_ELEMENTS.forEach((elem)=>{
          generateChosenNumberOfCards(1, elem);
      })
    }
   
}




let action;
let current = LINE_ACTIVE.innerHTML;
const moveLeft = () => {

  if (TABLET.matches) {
    CAROUSEL.classList.add("transition-left-tablet");
    action = "transition-left-tablet";
} else if(DESKTOP.matches) {
CAROUSEL.classList.add("transition-left");
action = "transition-left";
} else {
CAROUSEL.classList.add("transition-left-mobile");
action = "transition-left-mobile";
}
    BTN_LEFT.removeEventListener("click", moveLeft);
    BTN_RIGHT.removeEventListener("click", moveRight);
    current = LINE_ACTIVE.innerHTML;
    
};
  
const moveRight = () => {
    if (TABLET.matches) {
      CAROUSEL.classList.add("transition-right-tablet");
      action = "transition-right-tablet";

} else if(DESKTOP.matches) {
  CAROUSEL.classList.add("transition-right");
  action = "transition-right";
} else {
  CAROUSEL.classList.add("transition-right-mobile");
  action = "transition-right-mobile";
}

    BTN_LEFT.removeEventListener("click", moveLeft);
    BTN_RIGHT.removeEventListener("click", moveRight);
    current = LINE_ACTIVE.innerHTML;
    
};
  
BTN_LEFT.addEventListener("click", moveLeft);
BTN_RIGHT.addEventListener("click", moveRight);




CAROUSEL.addEventListener("animationend", (animationEvent) => {
let changedItem;
let prevCards = LINE_LEFT;
let nextCards = LINE_RIGHT;
let numberOfCards;
if (animationEvent.animationName === "move-left") {
    console.log(CAROUSEL.classList);
    console.log(animationEvent);
    CAROUSEL.classList.remove(action);
    changedItem = LINE_LEFT;
    document.querySelector(".slider__line-active").innerHTML = LINE_LEFT.innerHTML;
    console.log('next-line',LINE_RIGHT);
    nextCards.innerHTML = current;
} else {
  console.log(CAROUSEL.classList);
    CAROUSEL.classList.remove(action);
    changedItem = LINE_RIGHT;
    document.querySelector(".slider__line-active").innerHTML = LINE_RIGHT.innerHTML;
    prevCards.innerHTML = current;
    console.log('prev-line',LINE_LEFT);
}

changedItem.innerHTML = "";


if (TABLET.matches) {
  numberOfCards = 2;
} else if(DESKTOP.matches) {
  numberOfCards = 3;
} else {
  numberOfCards = 1;
}

const randomCards = generateRandomIDs(numberOfCards);
console.log(randomCards);
for (let i = 0; i < numberOfCards; i++) {
    const card = createCardTemplate(randomCards[i]);
    changedItem.appendChild(card);
}
BTN_LEFT.addEventListener("click", moveLeft);
BTN_RIGHT.addEventListener("click", moveRight);
});




