import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.scss";
import { hideLoginForm } from "./scripts/functions"; 
import logo from "../assets/img/logo.png";

document.addEventListener("DOMContentLoaded", function() {
    const logoImage = document.querySelector(".logo");

    if (logoImage) {
        logoImage.setAttribute("src", logo);
    } else {
        console.error("No se encontró la etiqueta de imagen con la clase 'logo'.");
    }
});

// Llamada a la función para ocultar el formulario de inicio de sesión al clickear el botón
hideLoginForm();