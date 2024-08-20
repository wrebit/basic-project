const colors = []
const fruits = ['Banana', 'Abacate', 'Kiwi']

function trocarCor() {
    let r = Math.floor(Math.random()*255), g = Math.floor(Math.random()*255), b = Math.floor(Math.random()*255);
    document.getElementById('colors').style.color = 'rgb('+r+','+g+','+b+')';
}

function backgroundColor() {
    let r = Math.floor(Math.random()*255), g = Math.floor(Math.random()*255), b = Math.floor(Math.random()*255);
    document.body.style.background = 'rgb('+r+','+g+','+b+')';


}

for (i = 0; i<3;i++){
    let ask = prompt('Digite uma cor:')
    colors.push(ask)
}

document.getElementById('colors').innerHTML = colors

