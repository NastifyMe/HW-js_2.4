const slider = document.querySelector('.slider__input')
const slider__image = document.querySelector('.slider__image')

const size = () => {
    const value = slider.value
    slider__image.style.width = value + '%'
}

const debounseSize = _.debounce(size, 100)

slider.addEventListener('input', debounseSize)


const box = document.querySelector('#box')

const move = (e) => {
    box.style.left = e.clientX + 'px'
    box.style.top = e.clientY + 'px'
}

const debounceMove = _.debounce(move, 100)

document.addEventListener('mousemove', debounceMove)