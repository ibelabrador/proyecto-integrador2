
export function printUsers(usuarios) {
    // Obtener referencia al contenedor
    const contenedorGlobalChat = document.querySelector('.global-chat-container');
  
    // Construir el HTML para cada usuario
    const usuariosHTML = usuarios.map(usuario => `
      <div class="chat-container">
        <div class="avatar-container">
          <img src="${usuario.img}" class="avatar" alt="avatarLogo">
        </div>
        <div class="chat-info-container">
          <div class="chat-info">
            <h5>${usuario.name}</h5>
            <div class="last-message">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-check-all mr-1" viewBox="0 0 16 16">
                <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486z"/>
              </svg>
              <p>${usuario.phrase}</p>
            </div>
          </div>
          <span class="message-day">${usuario.date}</span>
        </div>
      </div>
    `).join('');
  
    // Asignar el HTML al contenedor
    contenedorGlobalChat.innerHTML = usuariosHTML;
  }
  