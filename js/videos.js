const videos = [
    {
        uri: "hL-xlsykYmA",
        nome: "bike mobi"
    },
    {
        uri: "IbrFeWCnPYI",
        nome: "mobile quick"
    },
    {
        uri: "x1nuNf5DJRI",
        nome: "feira preta"
    },
    {
        uri: "bqMvdMGCi3c",
        nome: "r.edu"
    },
    {
        uri: "InX7DldfvaU",
        nome: "gift hub"
    },
    {
        uri: "6W19Nery8rs",
        nome: "ibm young"
    },
    {
        uri: "1Kx77YezoGo",
        nome: "busy"
    },
    {
        uri: "DkceTcv6dAc",
        nome: "get programadora"
    },
    {
        uri: "qrpjefRiCSk",
        nome: "colheita urbana"
    },
    {
        uri: "wJxkG5e6JEQ",
        nome: "daki porto seguro"
    },
    {
        uri: "7s8rfv60kEo",
        nome: "fepbot"
    },
    {
        uri: "_iltevvRKyI",
        nome: "extreme fit"
    },
    {
        uri: "i5l1YH0NUU0",
        nome: "obapp"
    },
    {
        uri: "JU95a9mCFpI",
        nome: "agir"
    },
    {
        uri: "JU95a9mCFpI",
        nome: "alimentos++"
    },
    {
        uri: "PyWeUyBQifs",
        nome: "hear me"
    },
    {
        uri: "VZga-GPLL0s",
        nome: "kiga"
    },
    {
        uri: "C0L0EFzCUgk",
        nome: "space kids"
    },
    {
        uri: "yYCSL4ya8NA",
        nome: "alimente-se bem"
    }
]

var active = 0;
var sliderVideos = document.querySelector('#projetos .slider')

function getUri(id) {
    return `https://www.youtube.com/embed/${id}?rel=0&amp;showinfo=1`
}

function setActive() {
    sliderVideos.querySelector('.content iframe').src = getUri(videos[active].uri)
    sliderVideos.querySelector('.thumbs').innerHTML = ''
    for(let i = 0 ; i < videos.length ; i++){
        let li = document.createElement('li')
        if(i === active) {
            li.classList.add('active')
        }
        let number = document.createElement('span')
        number.classList.add('number')
        number.innerText = i+1
        let name = document.createElement('span')
        name.innerText = videos[i].nome
        li.appendChild(number)
        li.appendChild(name)
        sliderVideos.querySelector('.thumbs').appendChild(li)
    }
    sliderVideos.querySelectorAll('.thumbs li').forEach((li, i) => {
        li.addEventListener('click', ()=>{
            active = i
            setActive()
        })
    })
}

function rightVideos() {
    if(active < videos.length) {
        active++
        setActive()
    }
}

function leftVideos() {
    if(active > 0) {
        active--;
        setActive()
    }
}

function initialize() {
    sliderVideos.querySelector('.leftVideos').addEventListener('click', leftVideos)
    sliderVideos.querySelector('.rightVideos').addEventListener('click', rightVideos)
    setActive()
}

initialize()