let totalHours = 0;
let streak = 0;
let lastDate = null;

function addStudy() {
  const input = document.getElementById("hours");
  const hours = Number(input.value);

  if (!hours) return;

  const today = new Date().toDateString();

  if (lastDate) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    if (today === yesterday.toDateString()) {
      streak++;
    } else if (today !== lastDate) {
      streak = 1;
    }
  } else {
    streak = 1;
  }

  lastDate = today;

  totalHours += hours;

  document.getElementById("total").textContent = totalHours;
  document.getElementById("streak").textContent = streak;

  const li = document.createElement("li");
  li.textContent = `${today} - ${hours} hrs`;
  document.getElementById("history").appendChild(li);

  input.value = "";
}
