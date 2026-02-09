const gameArea = document.getElementById("area");
const scoreText = document.getElementById("score");

let score = 0;
let lives = 10;
let fallSpeed = 3.5;
let spawnRate = 1500;
let gameRunning = true;
let spawnInterval;

scoreText.textContent = "Score: 0 | Lives: 10";

// Reset game
function resetGame() {
  score = 0;
  lives = 10;
  fallSpeed = 3.5;
  spawnRate = 1500;
  gameRunning = true;

  gameArea.innerHTML = "";
  scoreText.textContent = "Score: 0 | Lives: 10";

  clearInterval(spawnInterval);
  spawnInterval = setInterval(createHeart, spawnRate);
}

function createHeart() {
  if (!gameRunning) return;

  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "❤️";

  const startX = Math.random() * (window.innerWidth - 40);
  let yPos = -50;

  heart.style.left = startX + "px";
  heart.style.top = yPos + "px";

  document.body.appendChild(heart);

  const fallInterval = setInterval(() => {
    yPos += fallSpeed;
    heart.style.top = yPos + "px";

    // Missed heart → fade out
    if (yPos > window.innerHeight) {
      clearInterval(fallInterval);
      heart.classList.add("fade");

      setTimeout(() => {
        heart.remove();
        loseLife();
      }, 600);
    }
  }, 20);

  // Click heart
  heart.addEventListener("click", () => {
    clearInterval(fallInterval);
    heart.classList.add("fade");

    setTimeout(() => {
      heart.remove();
    }, 300);

    score++;
    fallSpeed += 2;
    spawnRate = Math.max(400, spawnRate - 40);

    scoreText.textContent = `Score: ${score} | Lives: ${lives}`;

	if (score === 14) {
		
		setTimeout(()=>{
      gameRunning = false;
      clearInterval(spawnInterval);
      alert("You caught my heart ❤️");
      window.location.href = "quiz.html";
		},100);
    }
    
  });

}


// Lose life
function loseLife() {
  lives--;
  scoreText.textContent = `Score: ${score} | Lives: ${lives}`;

  if (lives === 0) {
    gameRunning = false;
    clearInterval(spawnInterval);

    setTimeout(() => {
      alert("You died 😭 Try again");
      resetGame();
    }, 500);
  }
}

// Start game
spawnInterval = setInterval(createHeart, spawnRate);
