/// Adjustable variables: 
let buttonText = "BUY NOW";
let buttonURL = 'https://www.lumifydrops.com/';

let textCollection = [
    `Elevate the look of your eyes with LUMIFY eye drops`,
    `LUMIFY dramatically reduces redness in    
        <span style="font-weight: bold;">1 minute</span>`,
    `And lasts up to 
        <span style="font-weight: bold;"> 8 hours</span>`,
  `See for yourself`
];

//DOM element variables:
const body = document.body
const header = document.querySelector('.header-container')
const footer = document.querySelector('.footer-text')
const mainElement = document.querySelector('.main-container')

function showProductImage() {
    //Update Background Image
    body.style.backgroundImage = "url('./assets/background--product.png')";
    body.style.transition = "2s";

    //Update Footer Text Color
    footer.style.color = 'var(--global-button-color)';
    footer.style.transition = '3s';

    //Update Footer Text Color
    header.style.backgroundColor = 'transparent';
    header.style.transition = '4s';

}

function createButton(){
    let button = document.createElement('button')
    button.classList.add('button')
    button.style.transitionTimingFunction = 'ease-out'

    button.innerText = buttonText
    button.addEventListener('click', () => document.location.href = `${buttonURL}`)
    
    //Attach Button to Main in HTML
    mainElement.after(button)
}

//Initiate Counter to iterate through textCollection array
let counter = 0

function rotateThroughText() {
    //check to make sure counter has not gone outside the Text Array 
    if (counter < textCollection.length){
        let text = textCollection[counter]
        const mainText = document.querySelector('.main-text')
        
        //At initial load, the first test item does not fade in
        if (counter === 0){
            mainText.style.opacity = "1"
        } else {
            //reset opacity so all other text can fade in
            mainText.style.opacity = "0"
        }

    //Hide the current text
    mainText.classList.remove('main-text--show')

    setTimeout(() => {
        //Update counter
        counter++
        //Update text
        mainText.innerHTML = text
        //Fade in new text
        mainText.classList.add('main-text--show')
        //Recursively call the function on next text item 
        setTimeout(rotateThroughText, 2000)
      }, 1000)
    }

    if (counter === textCollection.length -1) {
        //At final Text item call the function, in 1 second, to fade in Product image and button
        setTimeout(showProductImage(),createButton(), 1000)
    }
}

rotateThroughText()