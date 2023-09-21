const body = document.getElementsByTagName('body')[0]

let textCollection = [
  `
        Elevate the look of your eyes with LUMIFY eye drops
    `,

  `
        LUMIFY dramatically reduces redness in    
        <span style="font-weight: bold;">1 minute</span>
    `,

  `
        And lasts up to 
        <span style="font-weight: bold;"> 8 hours</span>
    `,

  `
        See for yourself
    `
]

function showProductImage() {
  body.style.backgroundImage = "url('./assets/background--product.png')";
  
  /*   mainText.classList.add('main-text--hide')
    mainText.innerHTML = text
    mainText.classList.remove('main-text--hide') */
}


let counter = 0

//mainText.innerHTML = textCollection[0]

function rotateThroughText() {
    if (counter < textCollection.length){
        let text = textCollection[counter]
        const mainText = document.querySelector('.main-text')

        mainText.classList.remove('main-text--show')

        setTimeout(() => {
          mainText.innerHTML = text
          mainText.classList.add('main-text--show')
          
          counter++
          setTimeout(rotateThroughText, 2000)
      }, 1000)
    } else if (counter === textCollection.length) {
    return showProductImage()
  }
}

rotateThroughText()