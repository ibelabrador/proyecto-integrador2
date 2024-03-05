
document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById("loginForm");
  
  loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const phoneNumber = document.getElementById("phoneNumber").value;
    const password = document.getElementById("password").value;
    
    if (!phoneNumber || !password) {
      alert("Por favor complete todos los campos.");
      return;
    }

    axios.get('http://localhost:3000/usuario')
      .then(response => {
        const data = response.data;
        const usuarioEncontrado = data.find(user => user.phone === parseInt(phoneNumber));

        if (!usuarioEncontrado) {
          alert("El número ingresado no existe.");
          return;
        }

        if (usuarioEncontrado.password !== password) {
          alert("La contraseña ingresada es incorrecta.");
          return;
        }

        alert("Bienvenido " + usuarioEncontrado.name);
      })
      .catch(error => {
        console.error('Error al obtener datos de usuario:', error);

        alert('Error al iniciar sesión. Inténtalo más tarde.');
      });
  });
});
