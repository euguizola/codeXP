window.addEventListener('scroll', (e) => {
    let header = document.querySelector('header')
    if(e.pageY > 100) {
        header.classList.add('scroll')
    } else if(header.classList.contains('scroll')) {
        header.classList.remove('scroll')
    }
})