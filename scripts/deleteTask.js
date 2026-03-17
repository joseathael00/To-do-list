// ? Importa a div 'container'
const container = document.getElementById("container");

// ? Cria uma função que ouve o evento de click de uma caixa específica
container.addEventListener("click", function (event) {
  // ? Recebe o evento e identifica se a caixa que o clique foi ouvido tem um parente chamado 'check'
  if (event.target.classList.contains("check")) {
    // ? Captura a exata caixa onde foi ouvido o clique, adiciona a classe de animação e a apaga
    const task = event.target.parentElement;
    task.classList.add("animation-disappear");
    setTimeout(() => {
      task.remove();
    }, 500);
  }
});
