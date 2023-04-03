class Producto {
    constructor(codigo, nombre, precio) {
      this.codigo = codigo;
      this.nombre = nombre;
      this.precio = precio;
    }
  
    imprimeDatos() {
      console.log(`Código: ${this.codigo}`);
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Precio: ${this.precio}`);
    }
  }
  
  const productos = [];
  
  const producto1 = new Producto(1, "gaceosa", 100);
  productos.push(producto1);
  
  const producto2 = new Producto(2, "galletas", 150);
  productos.push(producto2);
  
  const producto3 = new Producto(3, "pan", 200);
  productos.push(producto3);

  productos.forEach((producto) => {
    producto.imprimeDatos();
  });
  