//Mobile Menu

const menu = document.querySelector('.menu');
const right=document.querySelector(".right__mobile");


menu.addEventListener('click', () => {
    menu.classList.toggle('active')
    right.classList.toggle("activeRight")
})




//Slider

let currentElem = 0;

function moveSlides(selectors, dataAttr, contents) {
    selectors.forEach(item => {
        item.addEventListener('click', e => {
            selectors.forEach(elem => {
                item.classList.remove('active')
            })
            item.classList.add('active')
            let target = item.getAttribute(dataAttr)
            currentElem = target.replace('target-', '')
            currentElem--
            changeContent(target)
        })
    })

    function changeContent(target) {
        contents.forEach(e => {
            if (e.classList.contains(target)) {
                e.classList.add('active')
            } else e.classList.remove('active')
        })
    }
}

const getSelectorsAll = selector => [...document.querySelectorAll(selector)]

let titleOne = getSelectorsAll('.photo-elem')
let contentElem = getSelectorsAll('.content-elem ')

moveSlides(titleOne, 'data-target', contentElem)

let titleTwo = getSelectorsAll('.photo-elem__second')
let contentElemNext = getSelectorsAll('.content-elem__second ')

moveSlides(titleTwo, 'data-item', contentElemNext)






