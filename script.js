const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const contentPanel = document.getElementById("content-panel");
document.addEventListener("DOMContentLoaded", function () {
    // Función para cambiar el contenido al cargar la página
    function mostrarContenido1() {
        contentPanel.innerHTML = "<p>Contenido 1: Información importante</p>";
    }

    // Agregar evento de clic al botón 1
    button1.addEventListener("click", mostrarContenido1);

    // Simular clic en el botón 1 al cargar la página
    mostrarContenido1();
});

// Funciones para cambiar el contenido
function mostrarContenido1() {
    contentPanel.innerHTML = "<p>Contenido 1: Información importante</p>";
}

function mostrarContenido2() {
    contentPanel.innerHTML = "<p>Contenido 2: Otra información relevante</p>";
}

// Agregar eventos a los botones
button1.addEventListener("click", mostrarContenido1);
button2.addEventListener("click", mostrarContenido2);
