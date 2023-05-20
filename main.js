class Producto {
  constructor(nombre, calidad, precio, nivel) {
    this.nombre = nombre;
    this.calidad = calidad;
    this.precio = precio;
    this.nivel = nivel;
    this.mejoraAplicada = false;
  }
  mejora() {
    this.precio = this.precio + this.precio * 0.35;
    this.mejoraAplicada = true;
  }
  mejoraMagica(porcentaje) {
    this.precio = this.precio + this.precio * porcentaje;
  }
}

let carrito = [];
let continuar = true;

function buscarProductoPorNombre(nombre) {
  return carrito.find((producto) => producto.nombre === nombre);
}

function filtrarPorCalidad(calidad) {
  return carrito.filter((producto) => producto.calidad === calidad);
}

while (continuar) {
  const nombreProducto = prompt("Ingrese nombre del producto");
  const calidadProducto = prompt(
    "Ingrese la calidad del producto (Rara, Poco comun, Comun)"
  );
  const precioProducto = parseFloat(prompt("Ingrese precio del producto"));
  const nivelProducto = parseInt(prompt("Ingrese nivel del producto"));
  const producto = new Producto(
    nombreProducto,
    calidadProducto,
    precioProducto,
    nivelProducto
  );

  alert(
    "Nombre: " +
      producto.nombre +
      " Calidad: " +
      producto.calidad +
      " Precio: " +
      producto.precio +
      " Nivel: " +
      producto.nivel
  );

  const mejora = confirm("¿Quiere mejorar su objeto?");
  if (mejora) {
    producto.mejora();
    alert(
      "Nombre: " +
        producto.nombre +
        " Calidad: " +
        producto.calidad +
        " Precio: " +
        producto.precio +
        " Nivel: " +
        producto.nivel
    );
  }

  carrito.push(producto);

  continuar = confirm("¿Quiere seguir cargando productos?");
}

console.log("Carrito de compras:");
for (let i = 0; i < carrito.length; i++) {
  console.log(
    "Nombre: " +
      carrito[i].nombre +
      " Calidad: " +
      carrito[i].calidad +
      " Precio: " +
      carrito[i].precio +
      " Nivel: " +
      carrito[i].nivel
  );
}

const nombreBuscado =
  "Dragon Armor, Dragon Boots, Dragon Legs, Dragon Gloves, Dragon Helmet";
const productoEncontrado = buscarProductoPorNombre(nombreBuscado);

if (productoEncontrado) {
  console.log("Producto encontrado:", productoEncontrado);
} else {
  console.log("No se encontró el producto:", nombreBuscado);
}

const calidadFiltradaRara = "Rara";
const productosFiltradosRara = filtrarPorCalidad(calidadFiltradaRara);

if (productosFiltradosRara.length > 0) {
  console.log("Productos con calidad", calidadFiltradaRara + ":");
  productosFiltradosRara.forEach((producto) => {
    console.log(producto);
  });
} else {
  console.log("No se encontraron productos con calidad", calidadFiltradaRara);
}
