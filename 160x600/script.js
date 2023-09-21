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


function showProductImage() {
    //Update Background Image
    document.documentElement.style.backgroundImage = "url('./assets/background--product.png')";

    //Update Footer Text Color
    document.querySelector('.footer-text').style.color = 'var(--global-button-color)';
    document.querySelector('.footer-text').style.transition = '3s';

    //Update Footer Text Color
    document.querySelector('.header-container').style.backgroundColor = 'transparent';
    document.querySelector('.header-container').style.transition = '4s';

    createButton();
}

function createButton(){
    let mainElement = document.querySelector('.main-container')
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
        setTimeout(showProductImage(), 1000)
    }
}

rotateThroughText()