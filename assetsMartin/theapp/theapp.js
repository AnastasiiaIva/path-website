// Alerta cuando se hace clic en un botón
document.getElementById('conocenos').addEventListener('click', function(event) {
    event.preventDefault(); // Evitar que el enlace navegue
    alert('¡Gracias por interesarte en conocernos!');
  });
  
  document.getElementById('contactanos').addEventListener('click', function(event) {
    event.preventDefault(); // Evitar que el enlace navegue
    alert('¡Nos encantaría que te pongas en contacto con nosotros!');
  });
  
  // Cambiar el texto del botón cuando se pasa el ratón
  const buttons = document.querySelectorAll('.btn');
  
  buttons.forEach(button => {
    const originalText = button.textContent;
  
    button.addEventListener('mouseover', () => {
      button.textContent = '¡Click Here!';
    });
  
    button.addEventListener('mouseout', () => {
      button.textContent = originalText;
    });
  });
  