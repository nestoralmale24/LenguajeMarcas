        var num = 0;
        var intentos = 0;
        var inicio = 1;
        var fin = 100;
        function aleatorio() {
            num = Math.floor(Math.random() * 100) + 1;
            mensaje.innerHTML = "<h3>Introduce un numero entre " + inicio + "y el " + fin + "</h3>";
        }
        function comprobar() {
            if (intentos < 4) {
                if (numero.value > num) 
                {
                    fin = numero.value;
                    window.alert("repite has fallado")
                    intentos=intentos+1;
                }
                if (numero.value < num) {
                    inicio = numero.value;
                    window.alert("repite has fallado")
                    intentos=intentos+1;
                }
                if (numero.value == num) {
                    window.alert("!!!HAS ACERTADO!!!")
                }
            }
            else{
                window.alert(" has fallado")
                window.alert("!!!SE ACABARON TUS INTENTOS!!!")
            }
        }