document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContent = document.getElementById("almuerzos");

    tabButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // Desactivar todas las pestañas
            tabButtons.forEach((btn) => btn.classList.remove("active"));
            // Activar la pestaña seleccionada
            button.classList.add("active");

            // Cambiar el contenido según la pestaña seleccionada
            if (button.id === "tab1") {
                tabContent.innerHTML = "<p>Contenido de la pestaña 1</p>";
            } else if (button.id === "tab2") {
                tabContent.innerHTML = "<p>Contenido de la pestaña 5</p>";
            }
        });
    });
});
