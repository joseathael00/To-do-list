const createTask = document.querySelector("#create-task");
const containerDiv = document.getElementById("container");
const inputNameTask = document.getElementById("task-name-input");

function create() {
  inputNameTask.value = "";
  const newTask = document.createElement("div");
  const taskName = document.createElement("p");
  const check = document.createElement("button");

  newTask.classList.add("task-item");
  taskName.classList.add("task-name");
  check.classList.add("check");

  taskName.textContent = inputNameTask.value;

  containerDiv.appendChild(newTask);
  newTask.appendChild(check);
  newTask.appendChild(taskName);
}
