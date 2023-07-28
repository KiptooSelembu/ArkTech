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

  // Create a new cell for the action buttons
  const actionsCell = document.createElement("td");
  const editButton = document.createElement("button");
  const deleteButton = document.createElement("button");

  editButton.textContent = "Edit";
  deleteButton.textContent = "Delete";

  editButton.classList.add("edit-btn");
  deleteButton.classList.add("delete-btn");

  editButton.addEventListener("click", () => {
    // Implement edit functionality here if needed
    Swal.fire({
      icon: "info",
      title: "Edit",
      text: `You clicked Edit for ${exercise} (${duration} minutes).`,
    });
  });

  deleteButton.addEventListener("click", () => {
    // Implement delete functionality here if needed
    Swal.fire({
      icon: "warning",
      title: "Delete",
      text: `Are you sure you want to delete ${exercise} (${duration} minutes)?`,
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        row.remove();
        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: `${exercise} (${duration} minutes) has been deleted.`,
        });
      }
    });
  });

  actionsCell.appendChild(editButton);
  actionsCell.appendChild(deleteButton);

  row.appendChild(actionsCell);
  historyBody.appendChild(row);
}
