document.addEventListener("DOMContentLoaded", function () {
  const taskList = document.getElementById("task-list");
  const taskInput = document.getElementById("task-input");
  const addButton = document.getElementById("add-task-btn");
  function addTask() {
    const taskText = taskInput.value.trim();
    console.log(taskText);
    if (taskText === "") {
      alert("No value added. please add a task and try agian");
    } else {
      const Li = `<li>${taskText}</li>`;
      const Remove = `<button class="remove-btn"">Remove</button>`;
      const listItem = document.createElement("li");
      listItem.innerHTML = Li + Remove;
      taskList.appendChild(listItem);
      taskInput.value = "";
    }
  }

  taskInput.value = "";
  addButton.addEventListener("click", function () {
    addTask();
  });
  taskList.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
