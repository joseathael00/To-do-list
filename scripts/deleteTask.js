const container = document.getElementById("container");
container.addEventListener("click", function (event) {
  if (event.target.classList.contains("check")) {
    const task = event.target.parentElement;
    task.remove();
  }
});
