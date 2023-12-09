const baseOptions = document.querySelectorAll('.base-option');
let pedidoGeneral = [];
pedidoGeneral = JSON.parse(localStorage.getItem('pedidoGeneral'));
const totalDisplay = document.getElementById('total');
const dropdownTotalDisplay = document.getElementById('dropdown-subtotal');
let total = JSON.parse(localStorage.getItem('total'));
let contadorProductos = JSON.parse(localStorage.getItem('contadorProductos'));
const botonAbrirConfirmacion = document.getElementById('abrir-confirmacion');
let pedidoshtml = [];

document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem('total') !== null) {
        totalDisplay.textContent = "$ " + total + " ";
        dropdownTotalDisplay.textContent = "Subtotal:  $ " + total;
    }
    else {
        totalDisplay.textContent = " $ 0 ";
        dropdownTotalDisplay.textContent = "$:  0";
    }
});
document.addEventListener("DOMContentLoaded", actualizarPedido);
document.addEventListener("DOMContentLoaded", function () {
    if (contadorProductos == null) {
        contadorProductos = 1;
    }
});

window.addEventListener('storage', function (event) {
    if (event.key === 'total') {
        total = event.newValue;
        console.log(total);
    }
});
window.addEventListener('storage', function (event) {
    pedidoGeneral = [];
    limpiarScrollHtml();
    if (event.key === 'pedidoGeneral') {
        
        pedidoGeneral = JSON.parse(localStorage.getItem('pedidoGeneral'));
        console.log(pedidoGeneral);
        
    }
    actualizarPedido();
    actualizarSubtotal();
});
function limpiarScrollHtml() {
    pedidoshtml = [];
    pedidoshtml = document.querySelectorAll('.pedido-scroll');
    pedidoshtml.forEach(pedido => { pedido.remove() });
}

baseOptions.forEach(option => {
    option.addEventListener('click', function () {
        baseOptions.forEach(opt => {
            opt.parentElement.querySelector('i').classList.remove('fas', 'fa-check-circle');
            opt.parentElement.querySelector('i').classList.add('far', 'fa-circle');
        });
        this.parentElement.querySelector('i').classList.remove('far', 'fa-circle');
        this.parentElement.querySelector('i').classList.add('fas', 'fa-check-circle');
    });
});
baseOptions.forEach(option => {
    option.addEventListener('change', function () {
        const selectedValue = document.querySelector('input[name="base"]:checked').value;
        console.log('Seleccionado:', selectedValue);
        // Aquí puedes utilizar el valor seleccionado como desees
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const noBase = document.getElementById('no-base');
    noBase.click();
});

const toppingOptions = document.querySelectorAll('.topping-option');
const salsaOptions = document.querySelectorAll('.salsa-option');
const subtotalDisplay1 = document.getElementById('subtotal1');
const subtotalDisplay2 = document.getElementById('subtotal2');
let subtotal = 0;
let salsaMasCara = 0;
let salsas = 0;

function revisarBase() {
    let alMenosUnoSeleccionado = false;

    baseOptions.forEach(base => {
        if (basechecked) {
            alMenosUnoSeleccionado = true;
        }
    });

    if (!alMenosUnoSeleccionado) {
        alert('Selecciona al menos una opción antes de continuar.');
        // Puedes detener la acción aquí o agregar lógica adicional
    } else {
        // Aquí puedes ejecutar la acción que necesitas realizar
        console.log('¡Al menos una opción está seleccionada!');
    }

    return alMenosUnoSeleccionado;
}
// Función para calcular el subtotal
function calcularSubtotal() {
    let baseValue = 0;
    baseOptions.forEach(option => {
        if (option.checked) {
            baseValue = parseInt(option.value);
        }
    });

    const toppingsValue = Array.from(toppingOptions)
        .filter(option => option.checked)
        .reduce((acc, curr) => acc + parseInt(curr.value), 0);

    let salsasValue = 0;
    if (salsas > 1) {
        for (var i = 0; i < salsaOptions.length; i++) {
            if (salsaOptions[i].checked) {
                if (parseInt(salsaOptions[i].value) > salsaMasCara) {
                    salsaMasCara = parseInt(salsaOptions[i].value);
                }
                salsasValue = salsasValue + parseInt(salsaOptions[i].value);
            }
        }
    }
    salsasValue -= salsaMasCara;
    

    subtotal = baseValue + toppingsValue + salsasValue;
    
    subtotalDisplay1.textContent = `Subtotal: $${subtotal}`;
    subtotalDisplay2.textContent = `Subtotal: $${subtotal}`;
}
function checkSalsas() {
    salsas = 0;
    salsaOptions.forEach(opcion => {
        
        if (opcion.checked) {
            salsas++;
            console.log(salsas);
        }
    });
    if (salsas > 1) {
        calcularSubtotal();
    }
}

let sandwich = {tipo: "", id: "", base: "", toppings: [], salsas: [], subtotal: 0 };


function clearSandwich() {
    baseOptions.forEach(opcion => {
        opcion.checked = false;
        opcion.parentElement.querySelector('i').classList.add('far', 'fa-circle');
        opcion.parentElement.querySelector('i').classList.remove('fas', 'fa-check-circle');
    });
    toppingOptions.forEach(opcion => {
        opcion.checked = false;
    });
    salsaOptions.forEach(opcion => {
        opcion.checked = false;
    });
    sandwich = { base: "", toppings: [], salsas: [], subtotal: 0 };
    subtotal = 0;
    subtotalDisplay1.textContent = `Subtotal: $${subtotal}`;
    subtotalDisplay2.textContent = `Subtotal: $${subtotal}`;
}

function agregarSandwich() {
    let baseSandwich = "";
    let toppings = [];
    let salsas = [];

    baseOptions.forEach(base => { if (base.checked) { baseSandwich = base.parentElement.textContent } });
    toppingOptions.forEach(topping => { if (topping.checked) { toppings.push(topping.nextElementSibling.textContent.trim().split('$')[0].trim()) } });
    salsaOptions.forEach(salsa => { if (salsa.checked) { salsas.push(salsa.nextElementSibling.textContent.trim().split('$')[0].trim()) } });
    sandwich = {
        tipo: "sandwich",
        id: 'producto_' + contadorProductos,
        base: baseSandwich.split('$')[0].trim(),
        toppings: toppings,
        salsas: salsas,
        subtotal: subtotal
    }
    pedidoGeneral.push(sandwich);
    agregarProducto(sandwich.base, sandwich.subtotal, sandwich.toppings);
    console.log(sandwich);
    
    localStorage.setItem('total', total + subtotal);
    localStorage.setItem('pedidoGeneral', JSON.stringify(pedidoGeneral));
    total = total + subtotal;
    actualizarSubtotal();
    clearSandwich();
}



// Event listeners para las bases
baseOptions.forEach(option => {
    option.addEventListener('change', calcularSubtotal);
});

// Event listeners para los toppings
toppingOptions.forEach(option => {
    option.addEventListener('change', calcularSubtotal);
});

// Event listeners para las salsas
salsaOptions.forEach(option => {
    option.addEventListener('change', checkSalsas);
});
document.getElementById('abrir-confirmacion').addEventListener('click', function () {
    if (revisarBase) {
        document.getElementById('confirmacion').style.display = 'flex';
    }
    
});

document.getElementById('agregarOtro').addEventListener('click', function () {
    // Lógica para agregar otro sandwich
    document.getElementById('confirmacion').style.display = 'none';
    agregarSandwich();
});

document.getElementById('irAPedido').addEventListener('click', function () {
    // Lógica para ir al pedido
    document.getElementById('confirmacion').style.display = 'none';
});
document.getElementById('borrar-sandwich').addEventListener('click', clearSandwich);


const scrollPedido = document.getElementById('scroll-pedidos');
function agregarAPedido() {
    const nuevoPedido = document.createElement('div');
    nuevoPedido.classList.add('pedido-scroll');
    nuevoPedido.textContent = 'Nuevo div con clase';
    scrollPedido.appendChild(nuevoPedido);
}

const contenedorProductos = document.getElementById('scroll-pedidos');
const botonAgregarProducto = document.getElementById('abrir-confirmacion');


function agregarProducto(_producto, _subtotal, _toppings) {
    const nuevoDiv = document.createElement('div');
    nuevoDiv.id = 'producto_' + contadorProductos; // ID único para el producto
    nuevoDiv.className = 'pedido-scroll'; // Clase del producto

    const iconoEliminar = document.createElement('i');
    iconoEliminar.className = 'fa-solid fa-circle-xmark';
    iconoEliminar.addEventListener('click', function () {
        eliminarProducto(nuevoDiv.id);
    });

    const mainInfoDiv = document.createElement('div');
    mainInfoDiv.className = 'main-info-pedido';
    const secondaryInfoDiv = document.createElement('div');
    secondaryInfoDiv.className = 'secondary-info-pedido';

    nuevoDiv.appendChild(mainInfoDiv);
    nuevoDiv.appendChild(secondaryInfoDiv);

    const textoPrincipal = document.createElement('p');
    textoPrincipal.className = 'pedido-scroll-main';
    textoPrincipal.textContent = _producto;

    const textoSubtotal = document.createElement('p');
    textoSubtotal.className = 'pedido-scroll-subtotal';
    textoSubtotal.textContent = "$" + _subtotal;

    const textoToppings = document.createElement('p');
    textoToppings.className = 'pedido-scroll-toppings';
    textoToppings.textContent = _toppings;

    mainInfoDiv.appendChild(iconoEliminar);
    mainInfoDiv.appendChild(textoPrincipal);
    mainInfoDiv.appendChild(textoSubtotal);
    secondaryInfoDiv.appendChild(textoToppings);

    contenedorProductos.appendChild(nuevoDiv);

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
                localStorage.setItem('total', total);
                localStorage.setItem('pedidoGeneral', JSON.stringify(pedidoGeneral));
                actualizarSubtotal();
            }
        }
    }
}
function actualizarSubtotal() {
    totalDisplay.textContent = "$ " + total + " ";
    dropdownTotalDisplay.textContent = `Subtotal:   $${total}`;
}
function actualizarPedido() {
    if (pedidoGeneral !== null) {
        pedidoGeneral.forEach(pedido => {
            if (pedido.tipo === "pizza") {
                agregarProducto("Pizza " + pedido.tamano + "/ " + pedido.masa, pedido.subtotal, pedido.toppings);
            }
            if (pedido.tipo === "sandwich") {
                agregarProducto(pedido.base, pedido.subtotal, pedido.toppings);
            }
        });
    }
    else {
        pedidoGeneral = [];
    }
}

function clearJsons() {
    localStorage.clear();
}
document.getElementById('borrar-sandwich').addEventListener('click', clearJsons);



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
