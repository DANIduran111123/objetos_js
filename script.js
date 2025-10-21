function actualizarTiempo() {
    const ahora = new Date();
  
    // Reloj digital en formato bonito
    const hora = ahora.toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
    document.getElementById("hora").textContent = hora;
  
    // Fecha completa con día, mes y año
    const fecha = ahora.toLocaleDateString("es-ES", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric"
    });
    document.getElementById("fecha").textContent =
      fecha.charAt(0).toUpperCase() + fecha.slice(1);
  }
  
  // Actualiza cada segundo
  setInterval(actualizarTiempo, 1000);
  actualizarTiempo();
  