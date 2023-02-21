
// Variables
const baseDeDatos = [
    {
        id: 1,
        nombre: 'Guante aseo nitrilo verde',
        precio: 1500,
        iva: 239.5,
        neto: 1260.5,
        description: "Los guantes con excelente barrera de protección biológica y química. Es de categoría premium cuyo uso se extiende al área clínica, farmacéutica, industrial y alimenticia.",
        imagen: '/Cachureando/img/Productos/Producto001-Guantes.jpg'
    },
    {
        id: 2,
        nombre: 'Mascarilla 3 pligues celeste',
        precio: 2700,
        iva: 431.1,
        neto: 2268.9,
        description: "Mascarilla confortable e higiénica protección respiratoria. Brinda protección contra polvos, partículas no tóxicas y olores molestos. Caja de 50 unidades.",
        imagen: '/Cachureando/img/Productos/Producto002-Mascarilla.webp'
    },
    {
        id: 3,
        nombre: 'Guante aseo nitrilo verde',
        precio: 1500,
        iva: 239.5,
        neto: 1260.5,
        description: "Los guantes con excelente barrera de protección biológica y química. Es de categoría premium cuyo uso se extiende al área clínica, farmacéutica, industrial y alimenticia",
        imagen: '/Cachureando/img/Productos/Producto001-Guantes.jpg'
    },
    {
        id: 4,
        nombre: 'Guante aseo nitrilo verde',
        precio: 1500,
        iva: 239.5,
        neto: 1260.5,
        description: "Los guantes con excelente barrera de protección biológica y química. Es de categoría premium cuyo uso se extiende al área clínica, farmacéutica, industrial y alimenticia",
        imagen: '/Cachureando/img/Productos/Producto001-Guantes.jpg'
    },
    {
        id: 5,
        nombre: 'Guante aseo nitrilo verde',
        precio: 1500,
        iva: 239.5,
        neto: 1260.5,
        description: "Los guantes con excelente barrera de protección biológica y química. Es de categoría premium cuyo uso se extiende al área clínica, farmacéutica, industrial y alimenticia",
        imagen: '/Cachureando/img/Productos/Producto001-Guantes.jpg'
    },
    {
        id: 6,
        nombre: 'Guante aseo nitrilo verde',
        precio: 1500,
        iva: 239.5,
        neto: 1260.5,
        description: "Los guantes con excelente barrera de protección biológica y química. Es de categoría premium cuyo uso se extiende al área clínica, farmacéutica, industrial y alimenticia",
        imagen: '/Cachureando/img/Productos/Producto001-Guantes.jpg'
    },
    {
        id: 7,
        nombre: 'Guante aseo nitrilo verde',
        precio: 1500,
        iva: 239.5,
        neto: 1260.5,
        description: "Los guantes con excelente barrera de protección biológica y química. Es de categoría premium cuyo uso se extiende al área clínica, farmacéutica, industrial y alimenticia",
        imagen: '/Cachureando/img/Productos/Producto001-Guantes.jpg'
    },
    {
        id: 8,
        nombre: 'Guante aseo nitrilo verde',
        precio: 1500,
        iva: 239.5,
        neto: 1260.5,
        description: "Los guantes con excelente barrera de protección biológica y química. Es de categoría premium cuyo uso se extiende al área clínica, farmacéutica, industrial y alimenticia",
        imagen: '/Cachureando/img/Productos/Producto001-Guantes.jpg'
    },
    {
        id: 9,
        nombre: 'Guante aseo nitrilo verde',
        precio: 1500,
        iva: 239.5,
        neto: 1260.5,
        description: "Los guantes con excelente barrera de protección biológica y química. Es de categoría premium cuyo uso se extiende al área clínica, farmacéutica, industrial y alimenticia",
        imagen: '/Cachureando/img/Productos/Producto001-Guantes.jpg'
    },
    {
        id: 10,
        nombre: 'Guante aseo nitrilo verde',
        precio: 1500,
        iva: 239.5,
        neto: 1260.5,
        description: "Los guantes con excelente barrera de protección biológica y química. Es de categoría premium cuyo uso se extiende al área clínica, farmacéutica, industrial y alimenticia",
        imagen: '/Cachureando/img/Productos/Producto001-Guantes.jpg'
    },

];

let carrito = [];
const divisa = '$';
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMneto = document.querySelector('#neto');
const DOMiva = document.querySelector('#iva');
const DOMtotal = document.querySelector('#total');
const DOMdelivery = document.querySelector('#delivery');
const DOMtotalFinal = document.querySelector('#totalFinal');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');
const DOMbotonComprar = document.querySelector('#boton-comprar');

// Funciones

/**
 * Dibuja todos los productos a partir de la base de datos. No confundir con el carrito
 */
function renderizarProductos() {
    baseDeDatos.forEach((info) => {
        // Estructura
        const miNodo = document.createElement('div');
        miNodo.classList.add('card', 'col-md-5');
        // Body
        const miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body');
        // Titulo
        const miNodoTitle = document.createElement('h5');
        miNodoTitle.classList.add('card-title');
        miNodoTitle.textContent = info.nombre;
        // Imagen
        const miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('img-fluid');
        miNodoImagen.setAttribute('src', info.imagen);
        // Precio
        const miNodoPrecio = document.createElement('h6');
        miNodoPrecio.classList.add('card-text');
        miNodoPrecio.textContent = `${divisa}${info.precio}`;
        //Descripción
        const miNodoDescription = document.createElement('p');
        miNodoDescription.classList.add('card-text');
        miNodoDescription.textContent = `${info.description}`;
        // Boton 
        const miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-primary');
        miNodoBoton.textContent = 'Agregar carrito';
        miNodoBoton.setAttribute('marcador', info.id);
        miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
        // Insertamos
        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoPrecio);
        miNodoCardBody.appendChild(miNodoDescription);
        miNodoCardBody.appendChild(miNodoBoton);
        miNodo.appendChild(miNodoCardBody);
        DOMitems.appendChild(miNodo);
    });
}

/**
 * Evento para añadir un producto al carrito de la compra
 */

function anyadirProductoAlCarrito(evento) {
    // Añadimos el Nodo a nuestro carrito
    carrito.push(evento.target.getAttribute('marcador'))
    // Actualizamos el carrito 
    renderizarCarrito();
}

/**
 * Dibuja todos los productos guardados en el carrito
 */

function renderizarCarrito() {
    // Vaciamos todo el html
    DOMcarrito.textContent = '';
    // Quitamos los duplicados
    const carritoSinDuplicados = [...new Set(carrito)];
    // Generamos los Nodos a partir de carrito
    carritoSinDuplicados.forEach((item) => {
        // Obtenemos el item que necesitamos de la variable base de datos
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            // ¿Coincide las id? Solo puede existir un caso
            return itemBaseDatos.id === parseInt(item);
        });
        // Cuenta el número de veces que se repite el producto
        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
            return itemId === item ? total += 1 : total;
        }, 0);
        // Creamos el nodo del item del carrito
        const miNodo = document.createElement('li');
        miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
        miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${divisa}${miItem[0].precio}`;
        // Boton de borrar
        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-danger', 'mx-5');
        miBoton.textContent = 'Quitar';
        miBoton.style.marginLeft = '1rem';
        miBoton.style.marginTop = '1rem';
        miBoton.style.marginBottom = '1rem';
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', borrarItemCarrito);
        // Mezclamos nodos
        miNodo.appendChild(miBoton);
        DOMcarrito.appendChild(miNodo);
    });
    // Renderizamos el precio total en el HTML
    DOMneto.textContent = calcularNeto();
    DOMiva.textContent = calcularIva();
    DOMtotal.textContent = calcularTotal();
    DOMdelivery.textContent = calcularDelivery();
    DOMtotalFinal.textContent = calcularTotalFinal();

}

/**
 * Evento para borrar un elemento del carrito
 */
function borrarItemCarrito(evento) {
    // Obtenemos el producto ID que hay en el boton pulsado
    const id = evento.target.dataset.item;
    // Borramos todos los productos
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
    // volvemos a renderizar
    renderizarCarrito();
}


/**
 * Calcula el precio total NETO teniendo en cuenta los productos repetidos
 */
function calcularNeto() {
    // Recorremos el array del carrito 
    return carrito.reduce((neto, item) => {
        // De cada elemento obtenemos su precio
        const miItemNeto = baseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        // Los sumamos al total
        return neto + miItemNeto[0].neto;
    }, 0).toFixed(0);//agrega decimales.
}

/**
 * Calcula el precio total IVA teniendo en cuenta los productos repetidos
 */
function calcularIva() {
    // Recorremos el array del carrito 
    return carrito.reduce((iva, item) => {
        // De cada elemento obtenemos su precio
        const miItemIva = baseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        // Los sumamos al total
        return iva + miItemIva[0].iva;
    }, 0).toFixed(0);//agrega decimales.
}

/**
 * Calcula el precio total BRUTO teniendo en cuenta los productos repetidos
 */
function calcularTotal() {
    // Recorremos el array del carrito 
    return carrito.reduce((total, item) => {
        // De cada elemento obtenemos su precio
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        // Los sumamos al total
        return total + miItem[0].precio;
    }, 0).toFixed(0);//agrega decimales.
}

function calcularDelivery(total){
    if (total < 100000){    // <menor, <= menor ó igual.
        return 0.05*total;
    }
    else{
        return 0;
    }
}

function calcularTotalFinal() {
    // Recorremos el array del carrito 
    return carrito.reduce((total, item) => {
        // De cada elemento obtenemos su precio
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        // Los sumamos al total
        return total + miItem[0].precio;
    }, 0).toFixed(0);
}

/**
 * Varia el carrito y vuelve a dibujarlo
 */
function vaciarCarrito() {
    // Limpiamos los productos guardados
    carrito = [];
    // Renderizamos los cambios
    renderizarCarrito();
}

function comprarCarrito() {

}

// Eventos
DOMbotonVaciar.addEventListener('click', vaciarCarrito);

// Inicio
renderizarProductos();
renderizarCarrito();