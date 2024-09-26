// Función para actualizar el reloj
function updateClock() {
    const now = new Date(); // Obtiene la hora actual
    const hours = String(now.getHours()).padStart(2, '0'); // Formatea las horas
    const minutes = String(now.getMinutes()).padStart(2, '0'); // Formatea los minutos
    const seconds = String(now.getSeconds()).padStart(2, '0'); // Formatea los segundos
    // Actualiza el contenido del div con id 'clock'
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

// Llama a updateClock cada segundo
setInterval(updateClock, 1000);
updateClock(); // Llamada inicial para que no haya retraso de 1 segundo
