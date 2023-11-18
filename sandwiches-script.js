const baseOptions = document.querySelectorAll('.base-option');

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
const subtotalDisplay = document.getElementById('subtotal');
let subtotal = 0;

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

    subtotal = baseValue + toppingsValue;
    subtotalDisplay.textContent = `Subtotal: $${subtotal}`;
}

// Event listeners para las bases
baseOptions.forEach(option => {
    option.addEventListener('change', calcularSubtotal);
});

// Event listeners para los toppings
toppingOptions.forEach(option => {
    option.addEventListener('change', calcularSubtotal);
});