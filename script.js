const exerciseForm = document.getElementById("exerciseForm");
const historyBody = document.getElementById("historyBody");

exerciseForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const exercise = document.getElementById("exercise").value;
  const duration = document.getElementById("duration").value;

  if (!exercise || !duration) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please fill in all the fields.",
    });
    return;
  }

  addExerciseToHistory(exercise, duration);
  exerciseForm.reset();

  Swal.fire({
    icon: "success",
    title: "Success!",
    text: "Exercise added to history.",
  });
});

function addExerciseToHistory(exercise, duration) {
  const row = document.createElement("tr");
  const exerciseCell = document.createElement("td");
  const durationCell = document.createElement("td");

  exerciseCell.textContent = exercise;
  durationCell.textContent = duration + " minutes";

  row.appendChild(exerciseCell);
  row.appendChild(durationCell);
  historyBody.appendChild(row);
}
