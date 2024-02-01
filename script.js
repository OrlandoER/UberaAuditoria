function cambiarSeccion(seccion) {
  if (seccion === 'viajes') {
      document.getElementById('viajesSection').style.display = 'block';
      document.getElementById('uberEatsSection').style.display = 'none';
  } else if (seccion === 'uberEats') {
      document.getElementById('viajesSection').style.display = 'none';
      document.getElementById('uberEatsSection').style.display = 'block';
  }
}

function pedirUber() {
  // Lógica para enviar la solicitud de Uber, puedes mostrar un mensaje de confirmación aquí
  alert('Uber solicitado con éxito!');
}
