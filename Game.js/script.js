let score= 0
let time= 30
const ball = document.getElementById('ball')
const scoreDisplay = document.getElementById('score')
const timeDisplay = document.getElementById('time')

function moveBall() {
    const x = Math.random() * 360;
    const y = Math.random() * 360;
    ball.style.left = x + 'px';
    ball.style.top = y + 'px';
}
ball.onClick = function() {
    score++;
    scoreDisplay.innerText = score;
    moveBall();
};
function countdown() {
    const time = setInterval(() => {
      timeLeft--;
      timeDisplay.innerText = timeLeft;
      if(timeLeft <= 0) {
        
      }
    })
}