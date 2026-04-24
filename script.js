let totalHours = localStorage.getItem("totalHours") 
  ? Number(localStorage.getItem("totalHours")) 
  : 0;

let streak = localStorage.getItem("streak") 
  ? Number(localStorage.getItem("streak")) 
  : 0;

let lastDate = localStorage.getItem("lastDate");

document.getElementById("total").textContent = totalHours;
document.getElementById("streak").textContent = streak;

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

  // SAVE DATA 🔥
  localStorage.setItem("totalHours", totalHours);
  localStorage.setItem("streak", streak);
  localStorage.setItem("lastDate", lastDate);

  document.getElementById("total").textContent = totalHours;
  document.getElementById("streak").textContent = streak;

  const li = document.createElement("li");
  li.textContent = `${today} - ${hours} hrs`;
  document.getElementById("history").appendChild(li);

  input.value = "";
}
