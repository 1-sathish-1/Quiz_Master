function calculateScore(evaluateFn) {
  const answers = {
    q1: "paris",
    q2: "12",
    q3: "pink"
  };
  let score = 0;

  for (const [key, correctAnswer] of Object.entries(answers)) {
    const userAnswer = document.getElementById(key).value.trim().toLowerCase();
    if (evaluateFn(userAnswer, correctAnswer)) {
      score++;
    }
  }

  return score;
}

function strictScoring(userAnswer, correctAnswer) {
  return userAnswer === correctAnswer;
}

function lenientScoring(userAnswer, correctAnswer) {
  return correctAnswer.includes(userAnswer) && userAnswer.length > 0;
}

const btn = document.getElementById("checkScoreBtn");
const scoreDisplay = document.getElementById("score");

btn.addEventListener("click", () => {

  const score = calculateScore(strictScoring);
  scoreDisplay.textContent = `Your score is: ${score} / 3`;
});
