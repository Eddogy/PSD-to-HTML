const petsContainer = [...document.querySelectorAll('.pets__content--slider__container')];
const preBtn = [...document.querySelectorAll('.pets__content--slider__pre-btn')];
const nxtBtn = [...document.querySelectorAll('.pets__content--slider__nxt-btn')];

petsContainer.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
        
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})