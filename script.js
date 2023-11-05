document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabAlmuerzos = document.getElementById("almuerzos");
    const tabPostres = document.getElementById("postres");
    
    tabButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // Desactivar todas las pestañas
            tabButtons.forEach((btn) => btn.classList.remove("active"));
            // Activar la pestaña seleccionada
            button.classList.add("active");

            // Cambiar el contenido según la pestaña seleccionada
            if (button.id === "tab1") {
                tabAlmuerzos.innerHTML = "<p>Contenido de la pestaña 1</p>";
                tabPostres.style.display = "block";
            } else if (button.id === "tab2") {
                tabAlmuerzos.innerHTML = "<p>Contenido de la pestaña 5</p>";
                tabPostres.style.display = "none";
            }
        });
    });
});
