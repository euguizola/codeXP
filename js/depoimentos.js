const depoimentos = [
    {
        texto: 'Estava a procura de um curso que me desse confiança para entrar na área de desenvolvimento novamente e o programa CodeXP superou minhas expectativas.',
        autor: 'Amanda Botelho de Moraes'
    },
    {
        texto: 'Minha experiência no Code XP coincide com uma mudança bem grande na minha carreira. Para a maioria pode parecer um desvio muito grande, mas hoje vejo minha mudança de área como uma transição quase natural, e o Code foi parte fundamental nessa mudança de mentalidade.',
        autor: 'Marina Azevedo Ferreira Soares'
    },
    {
        texto: 'Fiz um curso de backend web pelo programa Code XP no Senai Info de Santa Cecília e foi excelente. Professores e coordenação extremamente competentes e estrutura mais que adequada para suportar todo o programa. Hiper mega super ultra power indico!',
        autor: 'Cristiane Maciel'
    },
    {
        texto: 'Uma experiência simplesmente incrível proporcionada pelos profissionais envolvidos no projeto CODEXP.',
        autor: 'Bruno Afonso'
    }
]

var active = 0;
var slider = document.querySelector('#depoimentos .slider')

function setActive() {
    slider.querySelector('blockquote').innerText = depoimentos[active].texto
    slider.querySelector('.author').innerText = depoimentos[active].autor
    slider.querySelector('.slides').innerHTML = ''
    for(let i = 0 ; i < depoimentos.length ; i++){
        let li = document.createElement('li')
        if(i === active) {
            li.classList.add('active')
        }
        slider.querySelector('.slides').appendChild(li)
    }
}

function right() {
    if(active < depoimentos.length) {
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