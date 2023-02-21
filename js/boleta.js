// FORMA 1
//Para importar función carrito. 
//Esta era una forma. Pero me arrojaba error en la consola en "tienda.js" y no me mostraba los productos en html.

// import { renderizarProductos } from './tienda.js';
// import { anyadirProductoAlCarrito } from './tienda.js';
// import { renderizarCarrito } from './tienda.js'
// import { calcularNeto } from './tienda.js'
// import { calcularIva } from './tienda.js'
// import { calcularTotal } from './tienda.js'
// import { calcularDelivery } from './tienda.js'
// import { calcularTotalFinal } from './tienda.js'

// renderizarProductos();
// anyadirProductoAlCarrito();
// renderizarCarrito();
// calcularNeto();
// calcularIva();
// calcularTotal();
// calcularDelivery();
// calcularTotalFinal();

// FORMA 2
// buscar elementosPara CLONAR DIV. 
const divParaClonar = document.getElementById("datosCarrito");
// Clonar el elemento y si es false solo clona el primer nodo.
const divClonado = divParaClonar.cloneNode(true);
// Modificar el contenido del div clonado  o mostrar como uno quiera.
divClonado.querySelector("p").textContent = "datosCarrito";
// Agregar el elemento clonado al DOM
document.body.appendChild(divClonado);


//Para enviar boleta a correo cliente.
function sendBoleta(){
  var params = {
      name: document.getElementById("nombres").value ,
      apellidos: document.getElementById("apellidos").value ,
      dirección: document.getElementById("dirección").value ,
      ciudad: document.getElementById("ciudad").value ,
      región: document.getElementById("región").value ,
      correo: document.getElementById("correo"). value ,
  };

const serviceID = "service_3rm1oxe";
const templateID = "template_qnx66is";

emailjs
.send(serviceID, templateID, params)
.then((res) =>{
      document.getElementById("nombres").value = "";
      document.getElementById("apellidos").value = "";
      document.getElementById("dirección").value = "";
      document.getElementById("ciudad").value = "";
      document.getElementById("región").value ="";
      document.getElementById("correo").value = "";
      console.log(res);
      alert("Tú boleta ha sido generada y enviada a tu correo exitosamente.");
  })

.catch((err) => console.log(err));
}

