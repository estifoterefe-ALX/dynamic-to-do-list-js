document.addEventListener("DOMContentLoaded", function () {
  const taskList = document.getElementById("task-list");
  const taskInput = document.getElementById("task-input");
  const addButton = document.getElementById("add-task-btn");
  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("No value added. Please add a task and try again.");
      return;
    }

    // Create <li>
    const li = document.createElement("li");
    li.textContent = taskText;

    // Create Remove Button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn"; // ← using className (NOT classList.add)

    // Remove task when button clicked
    removeBtn.onclick = function () {
      taskList.removeChild(li);
    };

    // Append button inside li
    li.appendChild(removeBtn);

    // Add li to the list
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
  }
  addButton.addEventListener("click", function () {
    addTask();
  });
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
