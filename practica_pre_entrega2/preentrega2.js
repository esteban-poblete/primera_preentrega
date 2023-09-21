class Ventas {
  constructor(nombre, precio, imagen) {
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
  }
}
const termo = new Ventas("Termo negro", 50000, "termo negro");
const vaso = new Ventas("Vaso gris", 20000, "vaso negro");
const mate = new Ventas("Mates rojo", 15000, "mate rojo");

const carrito = [];

let dolares = 100000;
const elDolar = document.querySelector("#dolares span");
elDolar.innerText = dolares;
const elCarrito = document.getElementById("carrito");

function comprar(ventasCompra) {
  if (dolares - ventasCompra.precio >= 0) {
    carrito.push(ventasCompra);
    dolares -= ventasCompra.precio;
    actualzarHTML();
  } else {
    alert(`Te quedaste sin saldo en la tarjeta.`);
  }
}
function vende(nombreDeitem) {
  const productoEncontrado = carrito.find(
    (item) => item.nombre == nombreDeitem
  );
  if (productoEncontrado) {
    dolares += productoEncontrado.precio;
    const indice = carrito.indexOf(productoEncontrado);
    carrito.splice(indice, 1);
  }
  actualzarHTML();
}
console.log(vende());

function actualzarHTML() {
  elCarrito.innerHTML = "";
  for (const item of carrito) {
    const li = `<li onclick="vende('${item.nombre}')"> 
    ${item.nombre} 
    </li>
    `;
    elCarrito.innerHTML += li;
  }
  elDolar.innerText = dolares;
}
