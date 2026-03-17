// ? Importa o botão de criar tastks, o container da página, e o input onde o nome da task será digitado
const createTask = document.querySelector("#create-task");
const containerDiv = document.getElementById("container");
const inputNameTask = document.getElementById("task-name-input");

function create() {
  if (!inputNameTask.value || inputNameTask.value.trim() === "") return;

  // ? Cria elementos de div, p e button
  // ? E aplica estilos css já prontos neles
  const newTask = document.createElement("div");
  const taskName = document.createElement("p");
  const check = document.createElement("button");

  newTask.classList.add("task-item");
  taskName.classList.add("task-name");
  check.classList.add("check");

  // ? Pega o valor do input e o atribui ao nome da nova task
  taskName.textContent = inputNameTask.value;

  // ? Adiciona o elemento div ao container
  containerDiv.appendChild(newTask);

  // ? Adiciona o botão 'chekc' ao elemento div
  newTask.appendChild(check);

  // ? Adiciona o nome da div de task dentro dela
  newTask.appendChild(taskName);

  // ? Limpa o input de nome
  inputNameTask.value = "";
}
