const mainText = document.getElementById('main-text-container')
const body = document.getElementsByTagName('body')[0]

/* 
Text array
for-loop - setTimeout to run through array
if index is at last, run show product function to update background image and remove header
*/

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

//setInterval(5000, showProductImage)

function showProductImage(counter) {
    console.log("body", body)
    body.style.backgroundImage = "url('./assets/background--product.png')";
        mainText.innerHTML = textCollection[textCollection.length - 1]
        mainText.classList.remove('main-text--hide')
}

/* if (counter < textCollection.length - 1) {
    setInterval(rotateThroughText, 2500)
} else if (counter === textCollection.length - 1) {
    showProductImage()
    //clearInterval(timer)
} */

let counter = 0

function rotateThroughText() {
    console.log(counter)
        //mainText.classList.add('main-text--hide')
        const timer = setTimeout(function () {
            mainText.innerHTML = textCollection[counter]
            mainText.classList.remove('main-text--hide')
            if (counter < textCollection.length - 1){
                counter++
            }
        }, 500)

        if (counter < textCollection.length - 1) {
            setInterval(rotateThroughText, 2500)
        }

        if (counter === textCollection.length - 1) {
            showProductImage(counter)
            counter++
        }
        
       if (counter > textCollection.length -1){
            clearInterval(timer)
        } 
        ///clearInterval(timer)
}

















/* function updateText(text) {
    console.log('update', text)
    const timer = setInterval(() => {
        mainText.innerHTML = text
    }, 1000)
   return clearInterval(timer)
}

function rotateThroughText() {
   // mainText.innerHTML = textCollection[1]

    for (let i = 0; i < textCollection.length; i++) {
        console.log('HTML', mainText, "text", textCollection[i])
        if (i === textCollection.length -1){
            showProduct()
        } 
            updateText(textCollection[i])
    } 
} */

//rotateThroughText()
window.addEventListener('load', rotateThroughText)


/* 
    const timer = setInterval(() => {
      setDisplayText((prevText) => prevText + flag[currIndex]);
      setCurrIndex((prevIndex) => prevIndex + 1);
    }, 500);

    return () => clearInterval(timer);
*/