const tamanoOptions = document.querySelectorAll('.tamano-option');
const tipoMasa = document.querySelectorAll('.tipo-masa');
let pedidoGeneral = [];
pedidoGeneral = JSON.parse(localStorage.getItem('pedidoGeneral'));
const totalDisplay = document.getElementById('total');
const dropdownTotalDisplay = document.getElementById('dropdown-subtotal');
let total = JSON.parse(localStorage.getItem('total'));
let contadorProductos = JSON.parse(localStorage.getItem('contadorProductos'));
const botonAbrirConfirmacion = document.getElementById('abrir-confirmacion');
let tamanoPizza = "";
const toppingOptions = document.querySelectorAll('.topping-option');
const salsaOptions = document.querySelectorAll('.salsa-base-option');
const subtotalDisplay1 = document.getElementById('subtotal1');
let subtotal = 0;

document.addEventListener("DOMContentLoaded", function () {
    toppingOptions.forEach(function (topping) {
        const label = topping.nextElementSibling;
        if (label.tagName === 'LABEL') {
            if (topping.disabled) {
                label.style.textDecoration = 'line-through';
            }
        }
        
    });
});

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
document.addEventListener("DOMContentLoaded", function () {
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
});
tamanoOptions.forEach(option => {
    option.addEventListener('click', function () {
        tamanoOptions.forEach(opt => {
            opt.parentElement.querySelector('i').classList.remove('fas', 'fa-check-circle');
            opt.parentElement.querySelector('i').classList.add('far', 'fa-circle');
        });
        this.parentElement.querySelector('i').classList.remove('far', 'fa-circle');
        this.parentElement.querySelector('i').classList.add('fas', 'fa-check-circle');
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const individual = document.getElementById('individual');
    individual.click();
    const masaTradicional = document.getElementById('tradicional-individual');
    masaTradicional.click();
    const salsaTomate = document.getElementById('salsa-tomate-individual');
    salsaTomate.click();
});


function mantenerToppings(_tamano) {
    if (_tamano === "individual") {
        toppingOptions.forEach(function (topping) {
            if (topping.checked) {
                if (topping.id.includes("extra")) {
                    let toppingMediana = document.getElementById('extra-mediana');
                    toppingMediana.checked = false;
                    let toppingFamiliar = document.getElementById('extra-familiar');
                    toppingFamiliar.checked = false;
                    let nuevoTopping = document.getElementById('extra-individual');
                    nuevoTopping.checked = true;
                    calcularSubtotal();
                }
                else if (topping.id.includes("tomate")) {
                    let toppingMediana = document.getElementById('tomate-mediana');
                    toppingMediana.checked = false;
                    let toppingFamiliar = document.getElementById('tomate-familiar');
                    toppingFamiliar.checked = false;
                    let nuevoTopping = document.getElementById('tomate-individual');
                    nuevoTopping.checked = true;
                    calcularSubtotal();
                }
                else if (topping.id.includes("cebolla")) {
                    let toppingMediana = document.getElementById('cebolla-mediana');
                    toppingMediana.checked = false;
                    let toppingFamiliar = document.getElementById('cebolla-familiar');
                    toppingFamiliar.checked = false;
                    let nuevoTopping = document.getElementById('cebolla-individual');
                    nuevoTopping.checked = true;
                    calcularSubtotal();
                }
                else if (topping.id.includes("pepperoni")) {
                    let toppingMediana = document.getElementById('pepperoni-mediana');
                    toppingMediana.checked = false;
                    let toppingFamiliar = document.getElementById('pepperoni-familiar');
                    toppingFamiliar.checked = false;
                    let nuevoTopping = document.getElementById('pepperoni-individual');
                    nuevoTopping.checked = true;
                    calcularSubtotal();
                }
                else if (topping.id.includes("jamon")) {
                    let toppingMediana = document.getElementById('jamon-mediana');
                    toppingMediana.checked = false;
                    let toppingFamiliar = document.getElementById('jamon-familiar');
                    toppingFamiliar.checked = false;
                    let nuevoTopping = document.getElementById('jamon-individual');
                    nuevoTopping.checked = true;
                    calcularSubtotal();
                }
                else if (topping.id.includes("tocino")) {
                    let toppingMediana = document.getElementById('tocino-mediana');
                    toppingMediana.checked = false;
                    let toppingFamiliar = document.getElementById('tocino-familiar');
                    toppingFamiliar.checked = false;
                    let nuevoTopping = document.getElementById('tocino-individual');
                    nuevoTopping.checked = true;
                    calcularSubtotal();
                }
                else if (topping.id.includes("choclo")) {
                    let toppingMediana = document.getElementById('choclo-mediana');
                    toppingMediana.checked = false;
                    let toppingFamiliar = document.getElementById('choclo-familiar');
                    toppingFamiliar.checked = false;
                    let nuevoTopping = document.getElementById('choclo-individual');
                    nuevoTopping.checked = true;
                    calcularSubtotal();
                }
                else if (topping.id.includes("champis")) {
                    let toppingMediana = document.getElementById('champis-mediana');
                    toppingMediana.checked = false;
                    let toppingFamiliar = document.getElementById('champis-familiar');
                    toppingFamiliar.checked = false;
                    let nuevoTopping = document.getElementById('champis-individual');
                    nuevoTopping.checked = true;
                    calcularSubtotal();
                }
                else if (topping.id.includes("aceitunas")) {
                    let toppingMediana = document.getElementById('aceitunas-mediana');
                    toppingMediana.checked = false;
                    let toppingFamiliar = document.getElementById('aceitunas-familiar');
                    toppingFamiliar.checked = false;
                    let nuevoTopping = document.getElementById('aceitunas-individual');
                    nuevoTopping.checked = true;
                    calcularSubtotal();
                }
                else if (topping.id.includes("pimenton")) {
                    let toppingMediana = document.getElementById('pimenton-mediana');
                    toppingMediana.checked = false;
                    let toppingFamiliar = document.getElementById('pimenton-familiar');
                    toppingFamiliar.checked = false;
                    let nuevoTopping = document.getElementById('pimenton-individual');
                    nuevoTopping.checked = true;
                    calcularSubtotal();
                }
            }
        });
    }
    else if (_tamano === "mediana") {
        toppingOptions.forEach(function (topping) {
            if (topping.checked) {
                if (topping.id.includes("extra")) {
                    let toppingIndividual = document.getElementById('extra-individual');
                    toppingIndividual.checked = false;
                    let toppingFamiliar = document.getElementById('extra-familiar');
                    toppingFamiliar.checked = false;
                    let nuevoTopping = document.getElementById('extra-mediana');
                    nuevoTopping.checked = true;
                    calcularSubtotal();
                }
                else if (topping.id.includes("tomate")) {
                    let toppingIndividual = document.getElementById('tomate-individual');
                    toppingIndividual.checked = false;
                    let toppingFamiliar = document.getElementById('tomate-familiar');
                    toppingFamiliar.checked = false;
                    let nuevoTopping = document.getElementById('tomate-mediana');
                    nuevoTopping.checked = true;
                    calcularSubtotal();
                }
                else if (topping.id.includes("cebolla")) {
                    let toppingIndividual = document.getElementById('cebolla-individual');
                    toppingIndividual.checked = false;
                    let toppingFamiliar = document.getElementById('cebolla-familiar');
                    toppingFamiliar.checked = false;
                    let nuevoTopping = document.getElementById('cebolla-mediana');
                    nuevoTopping.checked = true;
                    calcularSubtotal();
                }
                else if (topping.id.includes("pepperoni")) {
                    let toppingIndividual = document.getElementById('pepperoni-individual');
                    toppingIndividual.checked = false;
                    let toppingFamiliar = document.getElementById('pepperoni-familiar');
                    toppingFamiliar.checked = false;
                    let nuevoTopping = document.getElementById('pepperoni-mediana');
                    nuevoTopping.checked = true;
                    calcularSubtotal();
                }
                else if (topping.id.includes("jamon")) {
                    let toppingIndividual = document.getElementById('jamon-individual');
                    toppingIndividual.checked = false;
                    let toppingFamiliar = document.getElementById('jamon-familiar');
                    toppingFamiliar.checked = false;
                    let nuevoTopping = document.getElementById('jamon-mediana');
                    nuevoTopping.checked = true;
                    calcularSubtotal();
                }
                else if (topping.id.includes("tocino")) {
                    let toppingIndividual = document.getElementById('tocino-individual');
                    toppingIndividual.checked = false;
                    let toppingFamiliar = document.getElementById('tocino-familiar');
                    toppingFamiliar.checked = false;
                    let nuevoTopping = document.getElementById('tocino-mediana');
                    nuevoTopping.checked = true;
                    calcularSubtotal();
                }
                else if (topping.id.includes("choclo")) {
                    let toppingIndividual = document.getElementById('choclo-individual');
                    toppingIndividual.checked = false;
                    let toppingFamiliar = document.getElementById('choclo-familiar');
                    toppingFamiliar.checked = false;
                    let nuevoTopping = document.getElementById('choclo-mediana');
                    nuevoTopping.checked = true;
                    calcularSubtotal();
                }
                else if (topping.id.includes("champis")) {
                    let toppingIndividual = document.getElementById('champis-individual');
                    toppingIndividual.checked = false;
                    let toppingFamiliar = document.getElementById('champis-familiar');
                    toppingFamiliar.checked = false;
                    let nuevoTopping = document.getElementById('champis-mediana');
                    nuevoTopping.checked = true;
                    calcularSubtotal();
                }
                else if (topping.id.includes("aceitunas")) {
                    let toppingIndividual = document.getElementById('aceitunas-individual');
                    toppingIndividual.checked = false;
                    let toppingFamiliar = document.getElementById('aceitunas-familiar');
                    toppingFamiliar.checked = false;
                    let nuevoTopping = document.getElementById('aceitunas-mediana');
                    nuevoTopping.checked = true;
                    calcularSubtotal();
                }
                else if (topping.id.includes("pimenton")) {
                    let toppingIndividual = document.getElementById('pimenton-individual');
                    toppingIndividual.checked = false;
                    let toppingFamiliar = document.getElementById('pimenton-familiar');
                    toppingFamiliar.checked = false;
                    let nuevoTopping = document.getElementById('pimenton-mediana');
                    nuevoTopping.checked = true;
                    calcularSubtotal();
                }
            }
        });
    }
    else if (_tamano === "familiar") {
        toppingOptions.forEach(function (topping) {
            if (topping.checked) {
                if (topping.id.includes("extra")) {
                    let toppingIndividual = document.getElementById('extra-individual');
                    toppingIndividual.checked = false;
                    let toppingMediana = document.getElementById('extra-mediana');
                    toppingMediana.checked = false;
                    let nuevoTopping = document.getElementById('extra-familiar');
                    nuevoTopping.checked = true;
                    calcularSubtotal();
                }
                else if (topping.id.includes("tomate")) {
                    let toppingIndividual = document.getElementById('tomate-individual');
                    toppingIndividual.checked = false;
                    let toppingMediana = document.getElementById('tomate-mediana');
                    toppingMediana.checked = false;
                    let nuevoTopping = document.getElementById('tomate-familiar');
                    nuevoTopping.checked = true;
                    calcularSubtotal();
                }
                else if (topping.id.includes("cebolla")) {
                    let toppingIndividual = document.getElementById('cebolla-individual');
                    toppingIndividual.checked = false;
                    let toppingMediana = document.getElementById('cebolla-mediana');
                    toppingMediana.checked = false;
                    let nuevoTopping = document.getElementById('cebolla-familiar');
                    nuevoTopping.checked = true;
                    calcularSubtotal();
                }
                else if (topping.id.includes("pepperoni")) {
                    let toppingIndividual = document.getElementById('pepperoni-individual');
                    toppingIndividual.checked = false;
                    let toppingMediana = document.getElementById('pepperoni-mediana');
                    toppingMediana.checked = false;
                    let nuevoTopping = document.getElementById('pepperoni-familiar');
                    nuevoTopping.checked = true;
                    calcularSubtotal();
                }
                else if (topping.id.includes("jamon")) {
                    let toppingIndividual = document.getElementById('jamon-individual');
                    toppingIndividual.checked = false;
                    let toppingMediana = document.getElementById('jamon-mediana');
                    toppingMediana.checked = false;
                    let nuevoTopping = document.getElementById('jamon-familiar');
                    nuevoTopping.checked = true;
                    calcularSubtotal();
                }
                else if (topping.id.includes("tocino")) {
                    let toppingIndividual = document.getElementById('tocino-individual');
                    toppingIndividual.checked = false;
                    let toppingMediana = document.getElementById('tocino-mediana');
                    toppingMediana.checked = false;
                    let nuevoTopping = document.getElementById('tocino-familiar');
                    nuevoTopping.checked = true;
                    calcularSubtotal();
                }
                else if (topping.id.includes("choclo")) {
                    let toppingIndividual = document.getElementById('choclo-individual');
                    toppingIndividual.checked = false;
                    let toppingMediana = document.getElementById('choclo-mediana');
                    toppingMediana.checked = false;
                    let nuevoTopping = document.getElementById('choclo-familiar');
                    nuevoTopping.checked = true;
                    calcularSubtotal();
                }
                else if (topping.id.includes("champis")) {
                    let toppingIndividual = document.getElementById('champis-individual');
                    toppingIndividual.checked = false;
                    let toppingMediana = document.getElementById('champis-mediana');
                    toppingMediana.checked = false;
                    let nuevoTopping = document.getElementById('champis-familiar');
                    nuevoTopping.checked = true;
                    calcularSubtotal();
                }
                else if (topping.id.includes("aceitunas")) {
                    let toppingIndividual = document.getElementById('aceitunas-individual');
                    toppingIndividual.checked = false;
                    let toppingMediana = document.getElementById('aceitunas-mediana');
                    toppingMediana.checked = false;
                    let nuevoTopping = document.getElementById('aceitunas-familiar');
                    nuevoTopping.checked = true;
                    calcularSubtotal();
                }
                else if (topping.id.includes("pimenton")) {
                    let toppingIndividual = document.getElementById('pimenton-individual');
                    toppingIndividual.checked = false;
                    let toppingMediana = document.getElementById('pimenton-mediana');
                    toppingMediana.checked = false;
                    let nuevoTopping = document.getElementById('pimenton-familiar');
                    nuevoTopping.checked = true;
                    calcularSubtotal();
                }
            }
        });
    }
}
tamanoOptions.forEach(option => {
    option.addEventListener('change', function () {
        if (option.value === "Individual") {
            tamanoPizza = "Individual";
            document.getElementById('tipo-masa-individual').style.display = 'block';
            document.getElementById('tipo-masa-mediana').style.display = 'none';
            document.getElementById('tipo-masa-familiar').style.display = 'none';
            document.getElementById('toppings-individual').style.display = 'block';
            document.getElementById('toppings-mediana').style.display = 'none';
            document.getElementById('toppings-familiar').style.display = 'none';
            document.getElementById('salsas-base-individual').style.display = 'block';
            document.getElementById('salsas-base-mediana').style.display = 'none';
            document.getElementById('salsas-base-familiar').style.display = 'none';
            tipoMasa.forEach(function (tipo) {
                if (tipo.checked) {

                    if (tipo.id.includes("delgada")) {
                        let nuevoTipo = document.getElementById('delgada-individual');
                        nuevoTipo.click();
                    }
                    else if (tipo.id.includes("tradicional")) {
                        let nuevoTipo = document.getElementById('tradicional-individual');
                        nuevoTipo.click();
                    }
                    else if (tipo.id.includes("gruesa")) {
                        let nuevoTipo = document.getElementById('gruesa-individual');
                        nuevoTipo.click();
                    }
                }
            });
            salsaOptions.forEach(function (salsa) {
                
                if (salsa.checked) {
                    
                    if (salsa.id.includes("bbq")) {
                        let nuevaSalsa = document.getElementById('bbq-individual');
                        nuevaSalsa.click();
                    }
                    else if (salsa.id.includes("tomate")) {
                        let nuevaSalsa = document.getElementById('salsa-tomate-individual');
                        nuevaSalsa.click();
                    }
                    else if (salsa.id.includes("crema")) {
                        let nuevaSalsa = document.getElementById('crema-individual');
                        nuevaSalsa.click();
                    }
                }
            });
            mantenerToppings("individual");
        }
        else if (option.value === "Mediana") {
            tamanoPizza = "Mediana";
            document.getElementById('tipo-masa-individual').style.display = 'none';
            document.getElementById('tipo-masa-mediana').style.display = 'block';
            document.getElementById('tipo-masa-familiar').style.display = 'none';
            document.getElementById('toppings-individual').style.display = 'none';
            document.getElementById('toppings-mediana').style.display = 'block';
            document.getElementById('toppings-familiar').style.display = 'none';
            document.getElementById('salsas-base-individual').style.display = 'none';
            document.getElementById('salsas-base-mediana').style.display = 'block';
            document.getElementById('salsas-base-familiar').style.display = 'none';
            tipoMasa.forEach(function (tipo) {
                if (tipo.checked) {

                    if (tipo.id.includes("delgada")) {
                        let nuevoTipo = document.getElementById('delgada-mediana');
                        nuevoTipo.click();
                    }
                    else if (tipo.id.includes("tradicional")) {
                        let nuevoTipo = document.getElementById('tradicional-mediana');
                        nuevoTipo.click();
                    }
                    else if (tipo.id.includes("gruesa")) {
                        let nuevoTipo = document.getElementById('gruesa-mediana');
                        nuevoTipo.click();
                    }
                }
            });
            salsaOptions.forEach(function (salsa) {

                if (salsa.checked) {

                    if (salsa.id.includes("bbq")) {
                        let nuevaSalsa = document.getElementById('bbq-mediana');
                        nuevaSalsa.click();
                    }
                    else if (salsa.id.includes("tomate")) {
                        let nuevaSalsa = document.getElementById('salsa-tomate-mediana');
                        nuevaSalsa.click();
                    }
                    else if (salsa.id.includes("crema")) {
                        let nuevaSalsa = document.getElementById('crema-mediana');
                        nuevaSalsa.click();
                    }
                }
            });
            mantenerToppings("mediana");
        }
        if (option.value === "Familiar") {
            tamanoPizza = "Familiar";
            document.getElementById('tipo-masa-individual').style.display = 'none';
            document.getElementById('tipo-masa-mediana').style.display = 'none';
            document.getElementById('tipo-masa-familiar').style.display = 'block';
            document.getElementById('toppings-individual').style.display = 'none';
            document.getElementById('toppings-mediana').style.display = 'none';
            document.getElementById('toppings-familiar').style.display = 'block';
            document.getElementById('salsas-base-individual').style.display = 'none';
            document.getElementById('salsas-base-mediana').style.display = 'none';
            document.getElementById('salsas-base-familiar').style.display = 'block';
            tipoMasa.forEach(function (tipo) {
                if (tipo.checked) {

                    if (tipo.id.includes("delgada")) {
                        let nuevoTipo = document.getElementById('delgada-familiar');
                        nuevoTipo.click();
                    }
                    else if (tipo.id.includes("tradicional")) {
                        let nuevoTipo = document.getElementById('tradicional-familiar');
                        nuevoTipo.click();
                    }
                    else if (tipo.id.includes("gruesa")) {
                        let nuevoTipo = document.getElementById('gruesa-familiar');
                        nuevoTipo.click();
                    }
                }
            });
            salsaOptions.forEach(function (salsa) {
                
                if (salsa.checked) {
                    
                    if (salsa.id.includes("bbq")) {
                        let nuevaSalsa = document.getElementById('bbq-familiar');
                        nuevaSalsa.click();
                    }
                    else if (salsa.id.includes("tomate")) {
                        let nuevaSalsa = document.getElementById('salsa-tomate-familiar');
                        nuevaSalsa.click();
                    }
                    else if (salsa.id.includes("crema")) {
                        let nuevaSalsa = document.getElementById('crema-familiar');
                        nuevaSalsa.click();
                    }
                }
            });
            mantenerToppings("familiar");
        }
    });
});
tipoMasa.forEach(option => {
    option.addEventListener('click', function () {
        tipoMasa.forEach(opt => {
            opt.parentElement.querySelector('i').classList.remove('fas', 'fa-check-circle');
            opt.parentElement.querySelector('i').classList.add('far', 'fa-circle');
        });
        this.parentElement.querySelector('i').classList.remove('far', 'fa-circle');
        this.parentElement.querySelector('i').classList.add('fas', 'fa-check-circle');
    });
});
tipoMasa.forEach(option => {
    option.addEventListener('change', function () {
        const selectedValue = document.querySelector('input[name="tipo-masa"]:checked').value;
        // Aquí puedes utilizar el valor seleccionado como desees
    });
});
salsaOptions.forEach(option => {
    option.addEventListener('click', function () {
        salsaOptions.forEach(opt => {
            opt.parentElement.querySelector('i').classList.remove('fas', 'fa-check-circle');
            opt.parentElement.querySelector('i').classList.add('far', 'fa-circle');
        });
        this.parentElement.querySelector('i').classList.remove('far', 'fa-circle');
        this.parentElement.querySelector('i').classList.add('fas', 'fa-check-circle');
    });
});
salsaOptions.forEach(option => {
    option.addEventListener('change', function () {
        const selectedValue = document.querySelector('input[name="salsa-base"]:checked').value;
        // Aquí puedes utilizar el valor seleccionado como desees
    });
});




function revisarMasa() {
    let alMenosUnoSeleccionado = false;

    tipoMasa.forEach(base => {
        if (base.checked) {
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
    let masaValue = 0;
    tipoMasa.forEach(option => {
        if (option.checked) {
            masaValue = parseInt(option.value);
        }
    });

    const toppingsValue = Array.from(toppingOptions)
        .filter(option => option.checked)
        .reduce((acc, curr) => acc + parseInt(curr.value), 0);

    let salsaValue = 0;
    salsaOptions.forEach(option => {
        if (option.checked) {
            salsaValue = parseInt(option.value);
        }
    });
    

    subtotal = masaValue + toppingsValue + salsaValue;
    
    subtotalDisplay1.textContent = `Subtotal: $${subtotal}`;
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

let pizza = {tipo: "", id: "", tamano: "", masa: "", toppings: [], salsa: "", subtotal: 0 };


function clearPizza() {
    tipoMasa.forEach(opcion => {
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
    pizza = {tamano: "", masa: "", toppings: [], salsa: "", subtotal: 0 };
    subtotal = 0;
    subtotalDisplay1.textContent = `Subtotal: $${subtotal}`;
}

function agregarPizza() {
    let masaPizza = "";
    let salsaPizza = "";
    let toppings = [];

    tipoMasa.forEach(tipo => { if (tipo.checked) { masaPizza = tipo.parentElement.textContent } });
    toppingOptions.forEach(topping => { if (topping.checked) { toppings.push(topping.nextElementSibling.textContent.trim().split('$')[0].trim()) } });
    salsaOptions.forEach(salsa => { if (salsa.checked) { salsaPizza = salsa.parentElement.textContent } });
    pizza = {
        tipo: "pizza",
        id: 'producto_' + contadorProductos,
        tamano: tamanoPizza,
        masa: masaPizza.split('$')[0].trim(),
        toppings: toppings,
        salsa: salsaPizza.split('$')[0].trim(),
        subtotal: subtotal
    }
    pedidoGeneral.push(pizza);
    agregarProducto("Pizza " + pizza.tamano + "/ " + pizza.masa, pizza.subtotal, pizza.toppings);
    
    localStorage.setItem('total', total + subtotal);
    localStorage.setItem('pedidoGeneral', JSON.stringify(pedidoGeneral));
    total = total + subtotal;
    actualizarSubtotal();
    clearPizza();
}



// Event listeners para las bases
tipoMasa.forEach(option => {
    option.addEventListener('change', calcularSubtotal);
});
salsaOptions.forEach(option => {
    option.addEventListener('change', calcularSubtotal);
});

// Event listeners para los toppings
toppingOptions.forEach(option => {
    option.addEventListener('change', calcularSubtotal);
});

document.getElementById('abrir-confirmacion').addEventListener('click', function () {
    if (revisarMasa) {
        document.getElementById('confirmacion').style.display = 'flex';
    }
    
});

document.getElementById('agregarOtro').addEventListener('click', function () {
    // Lógica para agregar otra Pizza
    document.getElementById('confirmacion').style.display = 'none';
    agregarPizza();
});

document.getElementById('irAPedido').addEventListener('click', function () {
    // Lógica para ir al pedido
    document.getElementById('confirmacion').style.display = 'none';
});
document.getElementById('borrar-pizza').addEventListener('click', clearPizza);


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