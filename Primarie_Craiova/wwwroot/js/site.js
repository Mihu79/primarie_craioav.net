﻿document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");
    const body = document.body;
    const savedTheme = localStorage.getItem("theme") || "light";

    body.setAttribute("data-theme", savedTheme);
    themeIcon.className = savedTheme === "dark" ? "bi bi-sun-fill" : "bi bi-moon-fill";

    themeToggle.addEventListener("click", () => {
        const newTheme = body.getAttribute("data-theme") === "light" ? "dark" : "light";
        body.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        themeIcon.className = newTheme === "dark" ? "bi bi-sun-fill" : "bi bi-moon-fill";
    });
});
