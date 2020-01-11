
const N = 7;

const rowDOM = document.querySelector('.row');
const containerDOM = document.querySelector('.container');
const buttonDOM = document.getElementById('shuffle');

let imageArr = [{ link: 'pic1.jpg', title: 'car', description: 'best' },
{ link: 'pic2.png', title: 'car', description: 'best' },
{ link: 'pic1.jpg', title: 'car', description: 'best' },
{ link: 'pic2.png', title: 'car', description: 'best' },
{ link: 'pic1.jpg', title: 'car', description: 'best' },
{ link: 'pic2.png', title: 'car', description: 'best' },
{ link: 'pic1.jpg', title: 'car', description: 'best' }]

const image = (i) => {
    return `
<div class="col-lg-2 col-12 col-md-4">
<div class="flip-box">
    <div class="flip-box-inner">
        <div class="flip-box-front">
            <img src=${imageArr[i].link} alt="Paris" style="width:100%;height:100%">
        </div>
        <div class="flip-box-back">
            <h2>${imageArr[i].title}</h2>
            <p>${imageArr[i].description}</p>
        </div>
    </div>
</div>
</div>`
}

function addImagesToDOM() {
    clearImages();
    for (let i = 0; i < N; i++) {
        rowDOM.innerHTML += image(i)
    }
}

function clearImages() {
    rowDOM.innerHTML = ''
}


function shuffleImages() {
    // random logic
    imageArr = shuffleLogic(imageArr)
    addImagesToDOM()
}

function shuffleLogic(array){
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

  return array
}


buttonDOM.addEventListener('click', ()=> {shuffleImages()})

addImagesToDOM()

