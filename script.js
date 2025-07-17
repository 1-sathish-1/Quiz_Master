function calculateScore(callback) {
  const answers = {
    q1: document.getElementById('q1').value.trim(),
    q2: document.getElementById('q2').value.trim(),
    q3: document.getElementById('q3').value.trim(),
  };

  const score = callback(answers);
  const method = callback.name === "strictScoring" ? "Strict" : "Lenient";
  document.getElementById('scoreDisplay').innerText = `${method} Scoring: Your Score: ${score} / 3`;
}

function strictScoring(answers) {
  let score = 0;
  if (answers.q1.toLowerCase() === "vinnveli nayagan") score++;
  if (answers.q2.toLowerCase() === "kamal hassan") score++;
  if (answers.q3.toLowerCase() === "kamal hassan") score++;
  return score;
}

function lenientScoring(answers) {
  let score = 0;
  if (answers.q1.toLowerCase().includes("vinnveli nayagan")) score++;
  if (answers.q2.toLowerCase().includes("kamal hassan")) score++;
  if (
    answers.q3.toLowerCase().includes("kamal hassan") ||
    answers.q3.toLowerCase().includes("aandavar")
  ) score++;
  return score;
}
