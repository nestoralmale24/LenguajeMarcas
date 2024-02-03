document.querySelector("#calculo").addEventListener('click', (evento) => {
    const valor1 = Number(document.querySelector("#valor1").value);
    const valor2 = Number(document.querySelector("#valor2").value);
    const operacion = document.querySelector('input[name="operacion"]:checked').value
    switch (operacion) {
      case "suma":
          document.querySelector("#resultado").textContent = valor1 + valor2;
          break;
      case "resta": 
          document.querySelector("#resultado").textContent = valor1 - valor2;
          break;
      default:   
    }
  })