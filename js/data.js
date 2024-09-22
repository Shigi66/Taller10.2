// Espera a que la página esté lista（⌒▽⌒ゞ//
document.addEventListener("DOMContentLoaded", function () {

  //  (҂⌣̀_⌣́) Recupera el texto guardado en localStorage con el textoGuardado  //
  let textoGuardado = localStorage.getItem("textoGuardado");

  // ༼つಠ益ಠ༽つ ─=≡ΣO))  Verifica si hay algún texto guardado antes de intentar mostrarlo//
  if (textoGuardado) {
    document.getElementById("data").innerHTML = textoGuardado;
  } else {
    document.getElementById("data").innerHTML = "No hay texto guardado.";
  }
});

