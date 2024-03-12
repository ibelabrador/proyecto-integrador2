export function hideLoginForm() {
    const loginButton = document.querySelector('.loginBtn');

    loginButton.addEventListener('click', function(event) {
        event.preventDefault(); // Evita el envío del formulario
        
        const form = document.getElementById('loginForm');

        // Validar el formulario antes de ocultarlo
        if (form.checkValidity()) {
            const loginSection = document.getElementById('login');
            const mainSection = document.querySelector('main');

            if (loginSection && mainSection) {
                loginSection.style.display = 'none'; // Ocultar el formulario de inicio de sesión
                mainSection.style.display = 'block'; // Mostrar la sección main
            } else {
                console.error("No se encontró el formulario de inicio de sesión o la sección principal.");
            }
        } else {
            form.classList.add('was-validated');
        }
    });
}

export function validateForm() {
    var form = document.getElementById("loginForm");
    if (form.checkValidity() === false) {
        form.classList.add('was-validated');
    }
}
