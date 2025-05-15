$(document).ready(function() {
    let puntaje = 0;
    let mejorPuntaje = localStorage.getItem("mejorPuntaje") || 0;
    $("#mejor").text(mejorPuntaje);
  
    let intervaloJuego;
    let tiempoLimite = 30 * 1000; // 30 segundos
  
    function crearCirculo() {
      let $circulo = $('<div class="circulo"></div>');
      let x = Math.random() * ($("#juego").width() - 50);
      let y = Math.random() * ($("#juego").height() - 50);
      $circulo.css({ top: y, left: x });
  
      $("#juego").append($circulo);
  
      setTimeout(() => {
        $circulo.fadeOut(300, () => $circulo.remove());
      }, 2000);
  
      $circulo.click(function() {
        puntaje++;
        $("#puntaje").text(puntaje);
        $(this).remove();
  
        if (puntaje > mejorPuntaje) {
          mejorPuntaje = puntaje;
          localStorage.setItem("mejorPuntaje", mejorPuntaje);
          $("#mejor").text(mejorPuntaje);
        }
      });
    }
  
    function iniciarJuego() {
      intervaloJuego = setInterval(crearCirculo, 1000);
  
      setTimeout(() => {
        clearInterval(intervaloJuego);        // Detiene la aparición de círculos
        $(".circulo").remove();               // Elimina los círculos existentes
        alert(`¡Tiempo terminado!\nTu puntaje fue: ${puntaje}`);
      }, tiempoLimite);
    }
  
    iniciarJuego();
  });
  