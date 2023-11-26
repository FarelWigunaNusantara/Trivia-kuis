const questions = [
  {
    question: "Berapa banyak kuncup perasa yang dimiliki oleh lidah rata-rata manusia?",
    answers: [
      { text: "100", correct: false },
      { text: "1.000", correct: false },
      { text: "10.000", correct: true },
      { text: "100.000", correct: false },
    ],
  },
  {
    question: "Bahasa apa yang memiliki paling banyak kata?",
    answers: [
      { text: "Mandarin", correct: false },
      { text: "Inggris", correct: true },
      { text: "Jepang", correct: false },
      { text: "Prancis", correct: false },
    ],
  },
  {
    question: "Negara mana yang memproduksi kopi paling banyak?",
    answers: [
      { text: "Indonesia", correct: false },
      { text: "Kolombia", correct: false },
      { text: "Brazil", correct: true },
      { text: "Thailand", correct: false },
    ],
  },
  {
    question: "Apa samudra terbesar di dunia? Jawab: Samudra Pasifik",
    answers: [
      { text: "Pasifik", correct: true },
      { text: "Atlantik", correct: false },
      { text: "Hindia", correct: false },
      { text: "Arktik", correct: false },
    ],
  },
  {
    question: "Siapa nama aktor yang memerankan karakter John Wick?",
    answers: [
      { text: "Jason Statham", correct: false },
      { text: "Brad Pitt", correct: false },
      { text: "Ryan Gosling", correct: false },
      { text: "Keanu Reeves", correct: true },
    ],
  },
  {
    question: "Apa organ terbesar pada tubuh manusia?",
    answers: [
      { text: "Jantung", correct: false },
      { text: "Usus", correct: false },
      { text: "Kulit", correct: true },
      { text: "Torso", correct: false },
    ],
  },
  {
    question: "Berapa banyak jantung yang dimiliki oleh seekor gurita?",
    answers: [
      { text: "2", correct: false },
      { text: "5", correct: false },
      { text: "4", correct: false },
      { text: "3", correct: true },
    ],
  },
  {
    question: "Negara mana yang menciptakan es krim?",
    answers: [
      { text: "Inggris", correct: false },
      { text: "China", correct: true },
      { text: "Belgia", correct: false },
      { text: "Amerika", correct: false },
    ],
  },
  {
    question: "Siapa penyanyi dengan rentang suara terluas?",
    answers: [
      { text: "Freddie Mercury", correct: false },
      { text: "Mariah Carey", correct: false },
      { text: "Prince", correct: false },
      { text: "Axl Rose", correct: true },
    ],
  },
  {
    question: "Apa olahraga paling populer di dunia?",
    answers: [
      { text: "Basket", correct: false },
      { text: "Sepak Bola", correct: true },
      { text: "Baseball", correct: false },
      { text: "Boxing", correct: false },
    ],
  },
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
});
function endQuiz() {
  questionElement.innerHTML = "Quiz completed! Your score is: " + score + "/" + questions.length;
  answerButtons.innerHTML = ""; // Clear answer buttons
  nextButton.style.display = "none"; // Hide the next button
}

startQuiz();
