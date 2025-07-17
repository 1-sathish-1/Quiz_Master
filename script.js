function calculateScore(callback) {
  const answers = {
    q1: document.getElementById('q1').value.trim(),
    q2: document.getElementById('q2').value.trim(),
    q3: document.getElementById('q3').value.trim(),
  };

  const score = callback(answers);
  document.getElementById('scoreDisplay').innerText = `Your Score: ${score} / 3`;
}

function strictScoring(answers) {
  let score = 0;
  if (answers.q1.toLowerCase() === "Vinnveli Nayagan") score++;
  if (answers.q2.toLowerCase() === "Kamal Hassan") score++;
  if (answers.q3.toLowerCase() === "Kamal Hassan") score++;
  return score;
}

function lenientScoring(answers) {
  let score = 0;
  if (answers.q1.toLowerCase().includes("Vinnveli Nayagan")) score++;
  if (answers.q2.toLowerCase().includes("Kamal Hassan")) score++;
  if (answers.q3.toLowerCase().includes("Kamal Hassan") || answers.q3.toLowerCase().includes("Aandavar")) score++;
  return score;
}
