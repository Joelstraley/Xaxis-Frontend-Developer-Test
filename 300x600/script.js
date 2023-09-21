const mainText = document.getElementById('main-text-container')
const body = document.getElementsByTagName('body')[0]

let textCollection = [
  `<h1 class="main-text">
        Elevate the look of your eyes with LUMIFY eye drops
    </h1>`,

  `<h1 class="main-text">
        LUMIFY dramatically reduces redness in    
        <span style="font-weight: bold;">1 minute</span>
    </h1>`,

  `<h1 class="main-text">
        And lasts up to 
        <span style="font-weight: bold;"> 8 hours</span>
    </h1>`,

  `<h1 class="main-text">
        See for yourself
    </h1>`
]

function showProductImage(text) {
  body.style.backgroundImage = "url('background--product.png')";
  
  /*   mainText.classList.add('main-text--hide')
    mainText.innerHTML = text
    mainText.classList.remove('main-text--hide') */
}


let counter = 0

mainText.innerHTML = textCollection[0]

function rotateThroughText() {
  text = textCollection[counter]

  setTimeout(() => {
    
    mainText.classList.add('main-text--hide')
    mainText.innerHTML = text
    mainText.classList.remove('main-text--hide')
    
    counter++

    if (counter === textCollection.length) {
      return showProductImage(text)
    }

    rotateThroughText()
  
}, 2000)
}

rotateThroughText()