function verifyScroll(e) {
    let header = document.querySelector('header')
    if (e.pageY > 100) {
        header.classList.add('scroll')
    } else if (header.classList.contains('scroll')) {
        header.classList.remove('scroll')
    }
}

window.addEventListener('scroll', verifyScroll)

document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.hamburger').classList.toggle('is-active')
    document.querySelector('nav').classList.toggle('active')
})

function setActiveUri(a) {
    document.querySelectorAll('nav ul li a').forEach(a => {
        a.classList.remove('active')
    })
    a.classList.add('active')
}

window.addEventListener('load', (e) => {
    let pos = window.location.href.search('#')
    let ref = window.location.href.substring(pos, window.location.href.length)
    if (ref !== '' && window.pageYOffset > 0) {
        document.querySelector('header').classList.add('scroll')
        document.querySelectorAll('nav ul li a').forEach(a => {
            if (a.href === window.location.href) {
                a.classList.add('active')
            }
            a.addEventListener('click', () => {
                setActiveUri(a)
            })
        })
    }
})