const cardsWrapperEl = document.querySelector('.cards_wrapper');

cardsWrapperEl.addEventListener('click', onCurrentHeartClick);

function onCurrentHeartClick (e) {
    if (e.target.classList.contains("heart_icon-wrapper")){
    e.target.classList.toggle('fill');
    }
}