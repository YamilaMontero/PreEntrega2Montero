const productos = [
    { id: 1, nombre: "Lentes", precio: 1500 },
    { id: 2, nombre: "Buzo", precio: 3500 },
    { id: 3, nombre: "Remera", precio: 4500 },
    { id: 4, nombre: "Pollera", precio: 5500 },
    { id: 5, nombre: "Camisa", precio: 6800 },
  ];
  
  productos.forEach((item) => {
    console.log(item.nombre);
    console.log(item.precio);
  });
  
  let precio = parseInt(prompt("Precio a partir de.."));
  let sumaPrecios = 0; 
  
  const encontrados = productos.filter((item) => {
    if (item.precio > precio) {
      let seleccionado = confirm(`¿Agregar ${item.nombre} al carrito?`);
      if (seleccionado) {
        sumaPrecios += item.precio; 
      }
      return seleccionado;
    }
    return false;
  });
  
  encontrados.forEach((item) => {
    let mensaje = `
      Id: ${item.id}
      Nombre: ${item.nombre}
      Precio: ${item.precio}
    `;
    alert(mensaje);
  });
  
  let agregarAlCarrito = confirm(`¿Deseas agregar la suma total al carrito?`);
  if (agregarAlCarrito) {
    console.log("Se agregó la suma total al carrito.");
  
    let promptSumaTotal = prompt("La suma total de los productos en el carrito es: " + sumaPrecios + "Por favor, ingresa su email para confirmar la compra:");
    console.log("El usuario", promptSumaTotal, "confirmó la compra.");
  
    alert("¡Felicidades, tu compra ha sido exitosa!");
  } else {
    console.log("No se agregó la suma total al carrito.");
  }
  
  
  


