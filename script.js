document.addEventListener("DOMContentLoaded", function () {
  const taskList = document.getElementById("task-list");
  const taskInput = document.getElementById("task-input");
  const addButton = document.getElementById("add-task-btn");
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks.forEach((taskText) => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
  }
  loadTasks();
  function addTask(task, save = true) {
    const taskText = task || taskInput.value.trim();
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

      const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      const index = storedTasks.indexOf(taskText);
      if (index > -1) {
        storedTasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(storedTasks));
      }
    };

    // Append button inside li
    li.appendChild(removeBtn);

    // Add li to the list
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
    if (save) {
      const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      storedTasks.push(taskText);
      localStorage.setItem("tasks", JSON.stringify(storedTasks));
    }
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
