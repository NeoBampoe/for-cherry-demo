const quizBox = document.getElementById("quiz-box");
const message = document.getElementById("message");

let currentQuestion = 0;

const questions = [
  {
    question: "What was our first date ?",
    answers: ["Gym date", "Ice cream run", "Coffee date", "The movies"],
    correct: 0
  },
  {
    question: "What did you get on our second coffee date ?",
    answers: ["Coke", "Pepermint crisp tart", "Ice cream", "Ice coffee"],
    correct: 0
  },
  {
    question: "Name of our first child",
    answers: ["Ellie", "Shrimpy", "Duckster", "Twinkie"],
    correct: 3
  },
  {
    question: "First flowers i ever got you",
    answers: ["Dark red roses", "White orchids", "White Chrysanthemum", "Lavenders","Yellow daffoldis","White jasmines"],
    correct: 2
  },
  {
    question: "Who loves you more?",
    answers: ["You", "Me", "The answer is number 2", "We boht know the answer is number 2","Hint : It's not you","Pick 2","It's shocking how you havn't chosen 2 yet"],
    correct: 1
  }
];

function loadQuestion() {
  quizBox.innerHTML = "";

  const q = questions[currentQuestion];

  const title = document.createElement("h2");
  title.textContent = q.question;
  quizBox.appendChild(title);

  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.textContent = answer;

    btn.addEventListener("click", () => checkAnswer(index));
    quizBox.appendChild(btn);
  });
}

function checkAnswer(selected) {
  if (selected === questions[currentQuestion].correct) {
    currentQuestion++;

    if (currentQuestion === questions.length) {
      message.textContent = "Perfect score 💕";
      setTimeout(() => {
        window.location.href = "final.html";
      }, 1500);
    } else {
      loadQuestion();
    }
  } else {
    message.textContent = "Wrong 😝 Try again!";
    setTimeout(() => {
      currentQuestion = 0;
      message.textContent = "";
      loadQuestion();
    }, 1500);
  }
}

loadQuestion();
