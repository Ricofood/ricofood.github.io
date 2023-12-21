
let pedidoGeneral = [];
pedidoGeneral = JSON.parse(localStorage.getItem('pedidoGeneral-congelados'));
const totalDisplay = document.getElementById('total');
const dropdownTotalDisplay = document.getElementById('dropdown-subtotal');
let total = 0;
//let contadorProductos = JSON.parse(localStorage.getItem('contadorProductos'));
let contadorProductos = 1;
const subtotalDisplay1 = document.getElementById('subtotal1');
let subtotal = 0;

document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem('total-congelados') !== null) {
        total = JSON.parse(localStorage.getItem('total-congelados'));
    }
});

document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem('total-congelados') !== null) {
        totalDisplay.textContent = "$ " + total + " ";
        subtotalDisplay1.textContent = "Subtotal:  $ " + total;
        dropdownTotalDisplay.textContent = "Subtotal:  $ " + total;
    }
    else {
        totalDisplay.textContent = " $ 0 ";
        subtotalDisplay1.textContent = "Subtotal:  $  0";
        dropdownTotalDisplay.textContent = "$:  0";
    }
});
function actualizarPedido() {
    contadorProductos = 1;
    if (pedidoGeneral !== null) {
        console.log(pedidoGeneral);
        pedidoGeneral.forEach(pedido => {
            if (pedido.tipo === "pizza") {
                agregarProductoAPedido(pedido.id, "Pizza " + pedido.tamano + "/ " + pedido.masa, pedido.subtotal, pedido.toppings, pedido.unidades);
            }
            if (pedido.tipo === "sandwich") {
                agregarProductoAPedido(pedido.id, pedido.base, pedido.subtotal, pedido.toppings, pedido.unidades);
            }
        });
    }
    else {
        pedidoGeneral = [];
    }
}
document.addEventListener("DOMContentLoaded", actualizarPedido);
document.addEventListener("DOMContentLoaded", function () {
    if (contadorProductos === null) {
        contadorProductos = 1;
    }
});
window.addEventListener('storage', function (event) {
    if (event.key === 'total-congelados') {
        total = event.newValue;
        console.log(total);
    }
});
window.addEventListener('storage', function (event) {
    if (event.key === 'pedidoGeneral-congelados') {
        pedidoGeneral = [];
        limpiarScrollHtml();
        limpiarPedidoHtml();
        pedidoGeneral = JSON.parse(localStorage.getItem('pedidoGeneral-congelados'));
        console.log(pedidoGeneral);
        actualizarPedido();
        actualizarSubtotal();
    }
    
});
function limpiarScrollHtml() {
    pedidoshtml = [];
    pedidoshtml = document.querySelectorAll('.pedido-scroll');
    pedidoshtml.forEach(pedido => { pedido.remove() });
}
function limpiarPedidoHtml() {
    pedidoshtml = [];
    pedidoshtml = document.querySelectorAll('.item-pedido');
    pedidoshtml.forEach(pedido => { pedido.remove() });
}

document.getElementById('abrir-confirmacion').addEventListener('click', function () {
    if (revisarMasa) {
        document.getElementById('confirmacion').style.display = 'flex';
    }
    
});

const contenedorPedidos = document.getElementById('pedidos');
const contenedorPedidosDropdown = document.getElementById('scroll-pedidos');
const botonAgregarProducto = document.getElementById('abrir-confirmacion');

function agregarProductoAPedido(_id, _producto, _subtotal, _toppings, _unidades) {
    const nuevoDiv = document.createElement('div');
    nuevoDiv.id = _id; // ID único para el producto
    nuevoDiv.className = 'item-pedido'; // Clase del producto


    const iconoEliminar = document.createElement('i');
    iconoEliminar.className = 'fa-solid fa-circle-xmark';
    iconoEliminar.addEventListener('click', function () {
        eliminarProducto(_id);
    });

    const unidadesDiv = document.createElement('div');
    const iconoMenos = document.createElement('i');
    iconoMenos.className = 'fa-solid fa-circle-minus';
    iconoMenos.addEventListener('click', function () {
        reducirProducto(_id, textoUnidades.id, textoSubtotal.id);
    });
    const textoUnidades = document.createElement('input');
    textoUnidades.id = 'unidades_' + contadorProductos;
    textoUnidades.type = 'text';
    textoUnidades.value = _unidades;
    textoUnidades.className = 'pedido-unidades';
    textoUnidades.textContent = _unidades;
    textoUnidades.addEventListener('blur', function (event) {
        cantidadExacta(_id, event.target.value, textoUnidades.id, textoSubtotal.id);
    });
    const iconoMas = document.createElement('i');
    iconoMas.className = 'fa-solid fa-circle-plus';
    iconoMas.addEventListener('click', function () {
        aumentarProducto(_id, textoUnidades.id, textoSubtotal.id);
    });
    unidadesDiv.appendChild(iconoMenos);
    unidadesDiv.appendChild(textoUnidades);
    unidadesDiv.appendChild(iconoMas);

    const mainInfoDiv = document.createElement('div');
    mainInfoDiv.className = 'main-info-pedido';
    const secondaryInfoDiv = document.createElement('div');
    secondaryInfoDiv.className = 'secondary-info-pedido';

    nuevoDiv.appendChild(mainInfoDiv);
    nuevoDiv.appendChild(secondaryInfoDiv);

    const textoPrincipal = document.createElement('p');
    textoPrincipal.className = 'pedido-main';
    textoPrincipal.textContent = _producto;
    

    const textoSubtotal = document.createElement('p');
    textoSubtotal.id = 'subtotal_' + contadorProductos;
    textoSubtotal.className = 'pedido-subtotal';
    textoSubtotal.textContent = "$" + _subtotal;

    const textoToppings = document.createElement('p');
    textoToppings.className = 'pedido-toppings';
    textoToppings.textContent = _toppings;

    mainInfoDiv.appendChild(iconoEliminar);
    mainInfoDiv.appendChild(textoPrincipal);
    mainInfoDiv.appendChild(unidadesDiv);
    mainInfoDiv.appendChild(textoSubtotal);
    secondaryInfoDiv.appendChild(textoToppings);

    contenedorPedidos.appendChild(nuevoDiv);

    agregarProductoADropdown(_producto, _subtotal, _toppings);
}
function agregarProductoADropdown(_producto, _subtotal, _toppings) {
    const nuevoDiv = document.createElement('div');
    nuevoDiv.id = 'producto_' + contadorProductos; // ID único para el producto
    nuevoDiv.className = 'pedido-scroll'; // Clase del producto

    const iconoEliminar = document.createElement('i');
    iconoEliminar.className = 'fa-solid fa-circle-xmark';
    iconoEliminar.addEventListener('click', function () {
        eliminarProducto(nuevoDiv.id);
    });

    const mainInfoDiv = document.createElement('div');
    mainInfoDiv.className = 'main-info-pedido-dropdown';
    const secondaryInfoDiv = document.createElement('div');
    secondaryInfoDiv.className = 'secondary-info-pedido-dropdown';

    nuevoDiv.appendChild(mainInfoDiv);
    nuevoDiv.appendChild(secondaryInfoDiv);

    const textoPrincipal = document.createElement('p');
    textoPrincipal.className = 'pedido-scroll-main-dropdown';
    textoPrincipal.textContent = _producto;

    const textoSubtotal = document.createElement('p');
    textoSubtotal.className = 'pedido-scroll-subtotal-dropdown';
    textoSubtotal.textContent = "$" + _subtotal;

    const textoToppings = document.createElement('p');
    textoToppings.className = 'pedido-scroll-toppings-dropdown';
    textoToppings.textContent = _toppings;

    mainInfoDiv.appendChild(iconoEliminar);
    mainInfoDiv.appendChild(textoPrincipal);
    mainInfoDiv.appendChild(textoSubtotal);
    secondaryInfoDiv.appendChild(textoToppings);

    contenedorPedidosDropdown.appendChild(nuevoDiv);

    contadorProductos++;
}

// Función para eliminar un producto por su ID
function eliminarProducto(idProducto) {
    const productoAEliminar = document.getElementById(idProducto);
    let valorProductoAEliminar = 0;
    if (productoAEliminar) {
        productoAEliminar.remove(); // Elimina el producto del DOM
        for (var i = 0; i < pedidoGeneral.length; i++) {
            if (pedidoGeneral[i].id === idProducto) {
                valorProductoAEliminar = pedidoGeneral[i].subtotal;
                pedidoGeneral.splice(i, 1);
                total = total - valorProductoAEliminar;
                localStorage.setItem('total-congelados', total);
                localStorage.setItem('pedidoGeneral-congelados', JSON.stringify(pedidoGeneral));
                actualizarSubtotal();
                if (total === 0) {
                    localStorage.removeItem('total-congelados');
                }
            }
        }
    }
}
function reducirProducto(idProducto, idUnidades, idValor) {
    const producto = document.getElementById(idProducto);
    const valor = document.getElementById(idValor);
    const unidades = document.getElementById(idUnidades);
    let valorProducto = 0;
    let unidadesProducto = 0;
    if (producto) {
        for (var i = 0; i < pedidoGeneral.length; i++) {
            if (pedidoGeneral[i].id === idProducto) {
                valorProducto = pedidoGeneral[i].valor;
                unidadesProducto = pedidoGeneral[i].unidades;
                if (unidadesProducto <= 1) {
                    eliminarProducto(idProducto);
                }
                else {
                    unidadesProducto--;
                    valorProducto *= unidadesProducto;
                    unidades.textContent = unidadesProducto;
                    unidades.value = unidadesProducto;
                    pedidoGeneral[i].unidades = unidadesProducto;
                    pedidoGeneral[i].subtotal = valorProducto;
                    valor.textContent = "$ " + valorProducto;
                    localStorage.setItem('pedidoGeneral-congelados', JSON.stringify(pedidoGeneral));
                    calcularSubtotal();
                    actualizarSubtotal();
                }
            }
        }
    }
}
function aumentarProducto(idProducto, idUnidades, idValor) {
    
    const producto = document.getElementById(idProducto);
    const valor = document.getElementById(idValor);
    const unidades = document.getElementById(idUnidades);
    let valorProducto = 0;
    let unidadesProducto = 0;

    if (producto) {
        for (var i = 0; i < pedidoGeneral.length; i++) {
            if (pedidoGeneral[i].id === idProducto) {
                valorProducto = pedidoGeneral[i].valor;
                unidadesProducto = pedidoGeneral[i].unidades;
                unidadesProducto++;
                valorProducto *= unidadesProducto;
                unidades.textContent = unidadesProducto;
                unidades.value = unidadesProducto;
                pedidoGeneral[i].unidades = unidadesProducto;
                pedidoGeneral[i].subtotal = valorProducto;
                valor.textContent = "$ " + valorProducto;
                localStorage.setItem('pedidoGeneral-congelados', JSON.stringify(pedidoGeneral));
                calcularSubtotal();
                actualizarSubtotal();
            }
        }
    }
}
function cantidadExacta(idProducto, cantidad, idUnidades, idValor) {
    const producto = document.getElementById(idProducto);
    const valor = document.getElementById(idValor);
    const unidades = document.getElementById(idUnidades);
    let valorProducto = 0;
    let unidadesProducto = 0;

    if (producto) {
        for (var i = 0; i < pedidoGeneral.length; i++) {
            if (pedidoGeneral[i].id === idProducto) {
                if (cantidad <= 0) {
                    eliminarProducto(idProducto);
                }
                else {
                    valorProducto = pedidoGeneral[i].valor;
                    unidadesProducto = cantidad;
                    valorProducto *= unidadesProducto;
                    unidades.textContent = unidadesProducto;
                    unidades.value = unidadesProducto;
                    pedidoGeneral[i].unidades = unidadesProducto;
                    pedidoGeneral[i].subtotal = valorProducto;
                    valor.textContent = "$ " + valorProducto;
                    localStorage.setItem('pedidoGeneral-congelados', JSON.stringify(pedidoGeneral));
                    calcularSubtotal();
                    actualizarSubtotal();
                }
            }
        }
    }
}
function actualizarSubtotal() {
    if (total != null) {
        totalDisplay.textContent = "$ " + total + " ";
        subtotalDisplay1.textContent = "Subtotal:  $ " + total;
        dropdownTotalDisplay.textContent = `Subtotal:   $${total}`;
    }
    else {
        totalDisplay.textContent = "$ " + 0 + " ";
        subtotalDisplay1.textContent = `Subtotal:   $${0}`;
        dropdownTotalDisplay.textContent = `Subtotal:   $${0}`;
    }
}
function calcularSubtotal() {
    total = 0;
    for (var i = 0; i < pedidoGeneral.length; i++) {
        total += pedidoGeneral[i].subtotal;
    }
    localStorage.setItem('total-congelados', total);
}

let pedidoDropdownAbierto = false;
document.addEventListener('click', function (event) {
    var target = event.target;
    if (!pedidoDropdown.contains(target) && !pedidoDropdownPanel.contains(target)) {
        if (pedidoDropdownAbierto) {
            cerrarDropdownPedido();
        }
       
    }
});
function abrirDropdownPedido() {
    pedidoDropdownPanel.style.top = '0%';
    pedidoCaretDown.style.display = 'none';
    pedidoCaretUp.style.display = 'inline-block';
    pedidoDropdownAbierto = true;
}
function cerrarDropdownPedido() {
    pedidoDropdownPanel.style.top = '-100%';
    pedidoCaretDown.style.display = 'inline-block';
    pedidoCaretUp.style.display = 'none';
    pedidoDropdownAbierto = false;
}
const pedidoDropdown = document.getElementById('pedido');
const pedidoDropdownPanel = document.getElementById('pedido-dropdown-panel');
const pedidoCaretDown = document.getElementById('caret-down');
const pedidoCaretUp = document.getElementById('caret-up');

pedidoCaretDown.addEventListener('click', abrirDropdownPedido);
pedidoCaretUp.addEventListener('click', cerrarDropdownPedido);