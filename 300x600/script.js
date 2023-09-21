let buttonText = "BUY NOW"
let buttonURL = 'https://www.lumifydrops.com/'

let textCollection = [
    `Elevate the look of your eyes with LUMIFY eye drops`,
    `LUMIFY dramatically reduces redness in    
        <span style="font-weight: bold;">1 minute</span>`,
    `And lasts up to 
        <span style="font-weight: bold;"> 8 hours</span>`,
  `See for yourself`
]

function showProductImage() {
    document.documentElement.style.backgroundImage = "url('./assets/background--product.png')";

    document.querySelector('.footer-text').style.color = 'var(--global-button-color)';
    document.querySelector('.footer-text').style.transition = '3s';

    document.querySelector('.header-container').style.backgroundColor = 'transparent';
    document.querySelector('.header-container').style.transition = '4s';
   /*  document.querySelector('.header-container').style.transitionTimingFunction = 'ease-in';  */
    
    let mainElement = document.querySelector('.main-container')
    let button = document.createElement('button')
    button.classList.add('button')
    button.style.transitionTimingFunction = 'ease-out'
/*     button.style.transition = '3s'; */
    button.innerText = buttonText
    button.addEventListener('click', () => document.location.href = `${buttonURL}`)
    mainElement.after(button)
}


let counter = 0

function rotateThroughText() {
    if (counter < textCollection.length){
        let text = textCollection[counter]
        const mainText = document.querySelector('.main-text')
        mainText.classList.remove('main-text--show')

    setTimeout(() => {
        counter++
        mainText.innerHTML = text
        mainText.classList.add('main-text--show')
        setTimeout(rotateThroughText, 2000)
      }, 1000)
    }

    if (counter === textCollection.length -1) {
        setTimeout(showProductImage(), 1000)
    }
}

rotateThroughText()