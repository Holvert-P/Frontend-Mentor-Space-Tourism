const animation = document.querySelector('.navbar');
const button = document.querySelector('.container__button');
const navbar__menu = document.querySelector('.container__menu');
const btn__carrusel = document.querySelectorAll('.btn__carrusel');
let i = 0;
// btn__carrusel[0].disabled = true;
btn__carrusel.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        btn__carrusel[i].classList.remove('btn__carrusel--change');
        btn.classList.toggle('btn__carrusel--change');
        btn__carrusel[i].disabled = false;
        btn.disabled = true;
        changeArticle();
        i = index;
        let article = document.getElementById(index);
        article.classList.toggle('info');
    });
});

button.addEventListener('click', () => {
    animation.classList.toggle('navbar__animation');
    navbar__menu.classList.toggle('animation__menu');
    button.classList.toggle('animation__button');
});

const changeArticle = () => {
    let info__hide = document.querySelectorAll('.info--hide');
    for (info of info__hide) {
        info.classList.remove('info')
    }
};