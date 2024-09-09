document.addEventListener("DOMContentLoaded", function() {
    let datoGuardado = localStorage.getItem("valorInput");
    document.getElementById("data").innerHTML = datoGuardado;
  });