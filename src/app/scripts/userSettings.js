export function setupModal() {
  const modal = document.getElementById("userSettingsModal");
  const avatarContainer = document.getElementById("user"); 
  const span = document.querySelector(".modal-header-content svg");

  avatarContainer.onclick = function() { 
    modal.classList.add("show"); // Agrega la clase show para mostrar el modal con animación
  }

  span.onclick = function() {
    modal.classList.remove("show"); // Remueve la clase show para ocultar el modal con animación
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.classList.remove("show"); // Remueve la clase show para ocultar el modal con animación si se hace clic fuera de él
    }
  }
}

document.addEventListener("DOMContentLoaded", function() {
  setupModal();
});
