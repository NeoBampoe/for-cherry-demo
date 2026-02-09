const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const yesBtn2 = document.getElementById("yesBtn2");
const message = document.getElementById("message");

const messages = [
  "What you doing ?????",
  "Don’t do that twin",
  "Did you mean to go to the other buttons",
  "It's fine twin,everyone makes mistakes",
  "Aight ,last chance,try again",
  "I was lying ,but dont pick no",
  "You play too much",
  "Charissa Naidoo that's not very cool of you",
  "You funny, now answer for real",
  "Bruhhhh",
  "You want me to cry, because I will don't test me",
  "Neo not happy",
  "You tryna make some typa joke or something?",
  "Jokes are meant to be funny",
  "This is not very funny"];

let msgIndex = 0;

// Move NO button
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  message.textContent = messages[msgIndex % messages.length];
  msgIndex++;
});

// YES button
function acceptLove() {
  document.body.innerHTML = `
    <div style="text-align:center;">
      <h1>YAYYYYY 💖💖💖</h1>
      <p>You just made me the happiest person alive 😘</p>
      <p>Happy Valentine’s Day ❤️</p>
    </div>
  `;
  window.location.href = "Ending.html";
}

yesBtn.addEventListener("click", acceptLove);
yesBtn2.addEventListener("click", acceptLove);
