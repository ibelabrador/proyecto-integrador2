import axios from "axios";

export function loginForm() {
  const loginButton = document.querySelector(".loginBtn");
  const phoneNumberInput = document.getElementById("phoneNumber");

  loginButton.addEventListener("click", async function (event) {
    event.preventDefault();

    const form = document.getElementById("loginForm");

    // Validar el formulario antes de ocultarlo
    if (form.checkValidity()) {
      const phoneNumber = phoneNumberInput.value;
      const password = document.getElementById("password").value;

      if (!phoneNumber || !password) {
        alert("Por favor complete todos los campos.");
        return;
      }

      try {
        const response = await axios.get("http://localhost:3000/usuario");
        const data = response.data;

        const usuarioEncontrado = data.find(
          (user) => user.phone === parseInt(phoneNumber)
        );

        if (!usuarioEncontrado) {
          alert("El número ingresado no existe.");
          return;
        }

        if (usuarioEncontrado.password !== password) {
          alert("La contraseña ingresada es incorrecta.");
          return;
        }

        alert("Bienvenido " + usuarioEncontrado.name);

        const loginSection = document.getElementById("login");
        const mainSection = document.querySelector("main");

        if (loginSection && mainSection) {
          loginSection.style.display = "none"; // Ocultar el formulario de inicio de sesión
          mainSection.style.display = "block"; // Mostrar la sección main
        } else {
          console.error(
            "No se encontró el formulario de inicio de sesión o la sección principal.");
        }
      } catch (error) {
        console.error("Error al obtener datos de usuario:", error);
        alert("Error al iniciar sesión. Inténtalo más tarde.");
      }
    } else {
      form.classList.add("was-validated");
    }
  });
}