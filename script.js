const cards = document.querySelectorAll('.memory-card');
let hasFliped = false;
let lock = false;
let firstCard, secondCard;
function flipCard() {
    if (lock) return;
    if (this === firstCard) return;
    this.classList.add('flip');
    if (!hasFliped) {
        hasFliped = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    checkMatch();
}
function checkMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCard() : unFlipCards();
}
function disableCard() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    reset();
}
function unFlipCards() {
    lock = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        reset();
    }, 1400);

}
function reset() {
    hasFliped = false;
    lock = false;
    firstCard = null;
    secondCard = null;
}
(function shuffle() {
    cards.forEach(card => {
        let rand = Math.floor(Math.random() * 12);
        card.style.order = rand;
    });
})();
cards.forEach(card => card.addEventListener('click', flipCard));

