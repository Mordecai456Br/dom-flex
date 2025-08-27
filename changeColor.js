const changeColorButton = document.querySelector('.changeColor-element-button');

changeColorButton.addEventListener("click", () => {
    changeRandomColor();
});

const colorClasses = ["red","orange","yellow","green","blue","dark-blue","purple","pink"];
const changeColorTargets = document.querySelectorAll('.changeColor');
// pegar um index aleatorio e colocar uma cor aleatoria

function randomInt(max){
    return Math.floor(Math.random() * max);
}

function changeRandomColor(){

    const indexColor = colorClasses[randomInt(8)]
    const indexClasse = colorClasses[randomInt(8)]

    changeColorTargets.forEach(target => {
        colorClasses.forEach(color => {
            target.classList.remove(color)
        });
    })




    indexClasse.classList.add(indexColor);
}

function changeColor() {
    const blues = document.querySelectorAll('.blue');
    const reds = document.querySelectorAll('.red');
    
    blues.forEach(blue => {
        blue.classList.add('red');
        blue.classList.remove('blue');
    });
    reds.forEach(red => {
        red.classList.add('blue');
        red.classList.remove('red');
    });
}

//setTimeout(changeColor,1000);
//setTimeout(changeColor,1500);
//setTimeout(changeColor,2000);
//setTimeout(changeColor,2500);
//setTimeout(changeColor,3000);
//setTimeout(changeColor,3500);
