alert("Bienvenidos al simulador de juegos");
let nombre = prompt("Decime cual es tu nombre");
let apellido = prompt("por favor escriba su apellido");
alert(nombre + " " + apellido + " espero que tenga una linda experiencia");
alert("Para poder jugar necesita abrir la consola con f12");

const personaje = "oso";
let vida = 5;
const vidaMaxima = 15;

function sumar(cantidad) {
  if (vida < vidaMaxima) {
    vida = vida + cantidad;
  }
  if (vida == vidaMaxima) {
    alert("felicitaciones estas en el maximo");
  }
  console.log(personaje + " " + barra());
}
function restar(cantidad) {
  if (vida > 0) {
    vida = vida - cantidad;
  }
  if (vida == 0) {
    alert("game over");
  }
  console.log(personaje + " " + barra());
}
function barra() {
  let barra = "";
  for (let i = 0; i < vida; i++) {
    barra = barra + "|";
  }
  let menos = vidaMaxima - vida;
  for (let i = 0; i < menos; i++) {
    barra = barra + "-";
  }
  return barra;
}
