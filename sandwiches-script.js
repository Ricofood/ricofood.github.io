const baseOptions = document.querySelectorAll('.base-option');
let pedidoGeneral = [];
pedidoGeneral = JSON.parse(localStorage.getItem('pedidoGeneral'));
const totalDisplay = document.getElementById('total');
const dropdownTotalDisplay = document.getElementById('dropdown-subtotal');
let total = JSON.parse(localStorage.getItem('total'));
let contadorProductos = JSON.parse(localStorage.getItem('contadorProductos'));

document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem('total') !== null) {
        totalDisplay.textContent = "$ " + total;
        dropdownTotalDisplay.textContent = "Subtotal:  $" + total;
    }
    else {
        totalDisplay.textContent = "$ 0";
        dropdownTotalDisplay.textContent = "$:  0";
    }
});
document.addEventListener("DOMContentLoaded", function () {
    if (pedidoGeneral !== null) {
        pedidoGeneral.forEach(pedido => {
            agregarProducto(pedido.base, pedido.subtotal);
        });
    }
    else {
        pedidoGeneral = [];
    }
});
document.addEventListener("DOMContentLoaded", function () {
    if (contadorProductos == null) {
        contadorProductos = 1;
    }
});

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
const toppingOptions = document.querySelectorAll('.topping-option');
const salsaOptions = document.querySelectorAll('.salsa-option');
const subtotalDisplay1 = document.getElementById('subtotal1');
const subtotalDisplay2 = document.getElementById('subtotal2');
let subtotal = 0;
let salsaMasCara = 0;
let salsas = 0;

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

let sandwich = {id: "", base: "", toppings: [], salsas: [], subtotal: 0 };


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
        id: 'producto_' + contadorProductos,
        base: baseSandwich.split('$')[0].trim(),
        toppings: toppings,
        salsas: salsas,
        subtotal: subtotal
    }
    pedidoGeneral.push(sandwich);
    agregarProducto(sandwich.base, sandwich.subtotal);
    console.log(sandwich);
    
    localStorage.setItem('total', total + subtotal);
    localStorage.setItem('pedidoGeneral', JSON.stringify(pedidoGeneral));
    total = total + subtotal;
    totalDisplay.textContent = "$ " + (total);
    dropdownTotalDisplay.textContent = `Subtotal:   $${total}`;
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
    document.getElementById('confirmacion').style.display = 'flex';
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

const pedidoDropdown = document.getElementById('pedido-dropdown');
const pedidoDropdownPanel = document.getElementById('pedido-dropdown-panel');
const pedidoCaretDown = document.getElementById('caret-down');
const pedidoCaretUp = document.getElementById('caret-up');

pedidoDropdown.addEventListener('change', function () {
    if (this.checked) {
        // Agregar estilos o realizar cambios al elementoAAfectar
        pedidoDropdownPanel.style.top = '0%';
        pedidoCaretDown.style.display = 'none';
        pedidoCaretUp.style.display = 'inline-block';
        // Otras acciones...
    } else {
        // Restaurar estilos o revertir cambios al elementoAAfectar
        pedidoDropdownPanel.style.top = '-100%';
        pedidoCaretDown.style.display = 'inline-block';
        pedidoCaretUp.style.display = 'none';
        // Otras acciones...
    }
});
const scrollPedido = document.getElementById('scroll-pedidos');
function agregarAPedido() {
    const nuevoPedido = document.createElement('div');
    nuevoPedido.classList.add('pedido-scroll');
    nuevoPedido.textContent = 'Nuevo div con clase';
    scrollPedido.appendChild(nuevoPedido);
}

const contenedorProductos = document.getElementById('scroll-pedidos');
const botonAgregarProducto = document.getElementById('abrir-confirmacion');


function agregarProducto(_producto, _subtotal) {
    const nuevoDiv = document.createElement('div');
    nuevoDiv.id = 'producto_' + contadorProductos; // ID único para el producto
    nuevoDiv.className = 'pedido-scroll'; // Clase del producto

    const iconoEliminar = document.createElement('i');
    iconoEliminar.className = 'fa-solid fa-circle-xmark';
    iconoEliminar.addEventListener('click', function () {
        eliminarProducto(nuevoDiv.id);
    });

    const textoPrincipal = document.createElement('p');
    textoPrincipal.className = 'pedido-scroll-main';
    textoPrincipal.textContent = _producto;

    const textoSubtotal = document.createElement('p');
    textoSubtotal.className = 'pedido-scroll-subtotal';
    textoSubtotal.textContent = _subtotal; // Puedes ajustar el subtotal

    nuevoDiv.appendChild(iconoEliminar);
    nuevoDiv.appendChild(textoPrincipal);
    nuevoDiv.appendChild(textoSubtotal);

    contenedorProductos.appendChild(nuevoDiv);

    contadorProductos++;
}

// Función para eliminar un producto por su ID
function eliminarProducto(idProducto) {
    const productoAEliminar = document.getElementById(idProducto);
    
    if (productoAEliminar) {
        productoAEliminar.remove(); // Elimina el producto del DOM
        for (var i = 0; i < pedidoGeneral.length; i++) {
            if (pedidoGeneral[i].id === idProducto) {
                pedidoGeneral.splice(i, 1);
                localStorage.setItem('pedidoGeneral', JSON.stringify(pedidoGeneral));
            }
        }
    }
}

function clearJsons() {
    localStorage.clear();
}
document.getElementById('borrar-sandwich').addEventListener('click', clearJsons);

