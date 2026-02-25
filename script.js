// Pequeño efecto de puntos animados
const text = document.querySelector("p");

let dots = 0;

setInterval(() => {
  dots = (dots + 1) % 4;
  text.textContent = "Estamos preparando algo increíble" + ".".repeat(dots);
}, 500);