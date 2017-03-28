'use strict';

function rand(from, to) {
return Math.floor((to - from + 1) * Math.random()) + from;
} // взлет случайного шарика

function getRandomBubble() {
const next = lines[rand(0, lines.length - 1)];
if (getRandomBubble.prev && next === getRandomBubble.prev) {
return getRandomBubble();
}
getRandomBubble.prev = next;
return next;
}; // исключение повторения взлета шарика

function showButton() {
startButton.style.display = 'initial';
} // показываем кнопку

function hideButton() {
startButton.style.display = 'none';
} // скрываем кнопку

function showBubble(line) {
line.classList.remove('boom');
line.classList.add('up');
} // шарик взлетает

function hideBubble(line) {
line.classList.remove('up');
} // скрываем шарик

function boomBubble(line) {
line.classList.add('boom');
} // взрываем шарик

function nextBubble() {
const bubble = getRandomBubble();
showBubble(bubble);
bubble.timeout = setTimeout(() => {
hideBubble(bubble);
nextBubble();
}, 2000);
} // взлет следующего шарика

function handleBubbleClick() {
const bubble = this.parentElement;
clearTimeout(bubble.timeout);
boomBubble(bubble);
hideBubble(bubble);
nextBubble();
} // взрыв шарика по нажатию

const lines = document.getElementsByClassName('hole');
const bubbles = document.getElementsByClassName('bubble');
const startButton = document.querySelector('.startButton');

for (let bubble of bubbles) {
bubble.addEventListener('click', handleBubbleClick);
}

startButton.addEventListener('click', () => {
hideButton();
nextBubble();
});
