export function hideLoginForm() {
    const loginButton = document.querySelector('.loginBtn');

    loginButton.addEventListener('click', function(event) {
        event.preventDefault(); // Evita el envío del formulario
        
        const loginSection = document.getElementById('login');

        if (loginSection) {
            loginSection.style.display = 'none';
        } else {
            console.error("No se encontró el formulario de inicio de sesión.");
        }

    });
}
