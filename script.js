document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");
    const menuIcon = menuToggle.querySelector(".menu-icon");
    const closeIcon = menuToggle.querySelector(".close-icon");

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");

        if (menu.classList.contains("active")) {
            menuIcon.style.display = "none";
            closeIcon.style.display = "inline-block";
        } else {
            menuIcon.style.display = "inline-block";
            closeIcon.style.display = "none";
        }
    });

    // Fecha o menu ao clicar em um link
    document.querySelectorAll("#menu a").forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("active");
            menuIcon.style.display = "inline-block";
            closeIcon.style.display = "none";
        });
    });
});
