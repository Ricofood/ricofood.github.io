document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabMenu = document.getElementById("menu");
    const tabMenuSemanal = document.getElementById("menu-semanal");
    const tabPostres = document.getElementById("postres");

    tabButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // Desactivar todas las pestañas
            tabButtons.forEach((btn) => btn.classList.remove("active"));
            // Activar la pestaña seleccionada
            button.classList.add("active");

            // Cambiar el contenido según la pestaña seleccionada
            if (button.id === "tab1") {
                tabMenuSemanal.style.display = "none";
                tabMenu.style.display = "block";
                tabPostres.style.display = "block";
            } else if (button.id === "tab2") {
                tabMenu.style.display = "none";
                tabMenuSemanal.style.display = "block";
                tabPostres.style.display = "none";
            }
        });
    });
});
