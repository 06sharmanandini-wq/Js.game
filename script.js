let score = 0;
let timeLeft = 30;
const ball = getElementByID('ball');
const scoreDisplay = document.getElementByID('score');
const timeDisplay = document.getElementByID('time');

function moveBall() {
    const x = Math.random* 360;
    const y = Math.random* 360;
    ball.style.left = x + 'px';
    ball.style.top = y + 'px';
}
ball.onclick = function() {
  score++;
  scoreDisplay.innerText = score;
  moveBall();
};
function countdown () {
    const timer = setInterval(() => {
        timeLeft--;
        timeDisplay.innerText = timeLeft;
        if(timeLeft <= 0) {
            clearInterval(timer);
            alert(`Game Over! your score: ${score}`);
            ball.style.display = 'none';
        }
    },  1000);   //<--- Interval Time added here
}