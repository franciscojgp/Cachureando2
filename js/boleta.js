// import { carrito } from './tienda';

function generarBoleta() {

    // PRIMERA PARTE: DATOS COMPRADOR.
    // Obtener valores de los campos de texto
    const nombres = document.getElementById('nombres').value;
    const apellidos = document.getElementById('apellidos').value;
    const dirección = document.getElementById('dirección').value;
    const ciudad = document.getElementById('ciudad').value;
    const región = document.getElementById('región').value;
    const correo = document.getElementById('correo').value;

    // Generar el contenido información comprador de la boleta
    const boletaHTML = `
      <h1><center>Boleta Electrónica</center></h1><br>
      <p><strong>Nombre:</strong> ${nombres} ${apellidos}</p>
      <p><strong>Dirección:</strong> ${dirección}</p>
      <p><strong>Ciudad:</strong> ${ciudad}</p>
      <p><strong>Región:</strong> ${región}</p>
      <p><strong>Correo electrónico:</strong> ${correo}</p><br><br>
    `;

    // Mostrar la boleta en el documento HTML
    const boletaDiv = document.getElementById('boleta');
    boletaDiv.innerHTML = boletaHTML;
    

    // SEGUNDA PARTE: DATOS DEL CARRITO, DETALLE DE COMPRA.

    // Obtener valores acer del tienda.js
    // Generar el contenido del carrito de la compra en la boleta.
    const carritoHTML = `
    <h3><strong>Detalle compra:</strong></h3><br>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">id</th>
      <th scope="col">Cantidad</th>
      <th scope="col">Producto</th>
      <th scope="col">Precio Neto</th>
      <th scope="col">Total Neto</th>
    </tr>
  </thead>


  <tbody id="boleta-detalles">

  </tbody>


  <tfoot align="right">
      <tr><br>
        <td colspan="5">Total neto:</td>
        <td id="total-neto"></td>
      </tr>
      <tr>
        <td colspan="5">IVA (19%):</td>
        <td id="iva"></td>
      </tr>
      <tr>
        <td colspan="5"><strong>Total bruto:</strong></td>
        <td id="total-bruto"><strong></strong></td>
      </tr>
    </tfoot>
</table>
  `;

// Ejemplo anterior
//   <p><strong>Nombre:</strong> ${nombres} ${apellidos}</p>
//   <p><strong>Dirección:</strong> ${dirección}</p>
//   <p><strong>Ciudad:</strong> ${ciudad}</p>
//   <p><strong>Región:</strong> ${región}</p>
//   <p><strong>Correo electrónico:</strong> ${correo}</p>

    // Mostrar la boleta en el documento HTML
    const carritoDiv = document.getElementById('carrito');
    carritoDiv.innerHTML = carritoHTML;
  }