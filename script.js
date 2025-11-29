// script.js

/**
 * mostrarMensaje(seccion)
 * Muestra un mensaje (alert) relacionado con la sesión seleccionada.
 * Puedes personalizar los mensajes como quieras o mostrarlos en el DOM.
 */
function mostrarMensaje(seccion) {
  // Ejemplo de mensajes por sesión:
  const mensajes = {
    'Sección 1': 'Introducción al Proyecto: crea una nueva página HTML y usa <div> como contenedor principal.',
    'Sección 2': 'Secciones de Contenido: dentro del <div> crea tres <section> con título y párrafo.',
    'Sección 3': 'Artículo y Navegación: crea un <article> dentro de una sección y un <nav> con al menos 3 enlaces.'
  };

  const texto = mensajes[seccion] || 'Mensaje no definido para esta sección.';
  // Mostrar en pantalla (alert) — se puede cambiar a mostrar en un DIV en la página
  alert(${seccion}\n\n${texto});
}

/* Alternativa: mostrar el mensaje en un elemento en la página
   (Descomenta si quieres usarlo en lugar de alert)
function mostrarMensajeEnDOM(seccion) {
  const cont = document.getElementById('mensaje-sesion');
  const texto = '...';
  cont.textContent = texto;
}
*/