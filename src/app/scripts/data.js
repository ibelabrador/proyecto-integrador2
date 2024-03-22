export async function loadUsers
() {
    const url = 'http://localhost:3000/usuario';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('No se pudo cargar los usuarios. Error de red.');
        }
        return await response.json();
    } catch (error) {
        console.error('Error al cargar los usuarios:', error);
    }
  }
  