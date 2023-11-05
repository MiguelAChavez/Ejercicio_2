window.addEventListener("load", () => {
  const botones = document.querySelectorAll("button");
  const val = document.getElementById("val1");
  const va2 = document.getElementById("val2");
  const resultado = document.getElementById("result");

  botones.forEach((boton) => {
    boton.addEventListener("click", (e) => {
      const val1 = parseFloat(val.value);
      const val2 = parseFloat(va2.value);
      if (isNaN(val1) || isNaN(val2)) {
        resultado.value = "syntax ERROR";
      } else {
        operacion(val1, val2, e.target.value);
      }
    });
  });

  function operacion(val1, val2, operacion) {
    switch (operacion) {
      case "sum":
        resultado.value = val1 + val2;
        break;
      case "res":
        resultado.value = val1 - val2;
        break;
      case "mul":
        resultado.value = val1 * val2;
        break;
      case "div":
        if (val2 !== 0) {
          resultado.value = val1 / val2;
        } else {
          resultado.value = "ERROR 🙄";
        }
        break;
      case "ac":
        val.value = 0;
        va2.value = 0;
        resultado.value = 0;
        break;
    }
  }
});
