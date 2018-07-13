const videos = [
    "hL-xlsykYmA",
    "IbrFeWCnPYI",
    "x1nuNf5DJRI",
    "bqMvdMGCi3c",
    "InX7DldfvaU",
    "6W19Nery8rs",
    "1Kx77YezoGo",
    "DkceTcv6dAc",
    "qrpjefRiCSk",
    "wJxkG5e6JEQ",
    "7s8rfv60kEo",
    "_iltevvRKyI",
    "i5l1YH0NUU0",
    "JU95a9mCFpI",
    "RMRSeJNj2Hc",
    "PyWeUyBQifs",
    "VZga-GPLL0s",
    "C0L0EFzCUgk",
    "yYCSL4ya8NA"
]

var active = 0;
var slider = document.querySelector('#projetos .slider')

function setActive() {
    slider.querySelector('.slides').innerHTML = ''
    for(let i = 0 ; i < videos.length ; i++){
        let li = document.createElement('li')
        if(i === active) {
            li.classList.add('active')
        }
        slider.querySelector('.slides').appendChild(li)
    }
}

function right() {
    if(active < videos.length) {
        active++
    }
    setActive()
}

function left() {
    if(active > 0) {
        active--;
    }
    setActive()
}

function initialize() {
    slider.querySelector('.left').addEventListener('click', left)
    slider.querySelector('.right').addEventListener('click', right)
    setActive()
}

initialize()