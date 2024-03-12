export function setupModal2() {
    const modal2 = document.getElementById("searchBarModal");
    const searchContainer = document.getElementById("search"); 
    const clearInput = document.querySelector(".clear-input"); 
    const span2 = document.querySelector(".modal-header-content2 svg");
  
    searchContainer.onclick = function() { 
      modal2.classList.add("show");
    }
  
    span2.onclick = function() {
      modal2.classList.remove("show");
    }
  
    clearInput.onclick = function() { 
      document.querySelector(".search-input2").value = ""; // Borra el contenido del input al hacer clic en el icono "x"
    }
  
    window.onclick = function(event) {
      if (event.target == modal2) {
        modal2.classList.remove("show");
      }
    }
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    setupModal2();
  });