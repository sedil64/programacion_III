const titulo = document.getElementById(`titulo`);
console.log("elemento titulo", titulo);

const notas = document.getElementsByClassName('notas');
Array.from(notas).forEach(n=>console.log(n.textContent));

const items = document.querySelectorAll('.item');
items.forEach(elemento=>console.log(elemento.textContent));

const mensaje = document.getElementById('mensaje');
mensaje.textContent="Nuestro h2 se ha actualizado";
mensaje.style.color="red";

const enlace = document.getElementById('link');
enlace.textContent="Ir a google";
enlace.setAttribute('href', "www.google.com");

console.log(mensaje);
console.log(enlace);