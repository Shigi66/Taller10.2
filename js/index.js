// Espera a que la página esté lista antes de hacer algo//
document.addEventListener("DOMContentLoaded", function () {
    
  //  (;° ロ°) Busca el botón con el ID "buttonText"  //
  let botonGuardar = document.getElementById("buttonText");
    
  // ╰༼⇀︿⇀༽つ-]═──  Cuando se haga clic en el botón, se ejecuta esta función//
  botonGuardar.addEventListener("click", function () {
        
  // (⊙_◎) Toma el texto que escribió el usuario //
  let textoIngresado = document.getElementById("inputText").value;
        
  // <(￣∇￣)ゞ  Guarda el texto en localStorage // 
  localStorage.setItem("textoGuardado", textoIngresado);
    });
});

// localStorage y repaso DOM ———–[]=¤ԅ༼ ･ 〜 ･ ༽╯ //