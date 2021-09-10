    const calcular = () => {
        const co = document.getElementById("inp_co").value;
        const ca = document.getElementById("inp_ca").value;

        const parte1 = Math.pow(co,2) + Math.pow(ca,2);

        const resultado = Math.sqrt (parte1);

        document.getElementById("h_resultado").textContent = "El resultado es: "+ resultado ;
    }
    const boton = document.getElementById("btn_calcular");
    boton.addEventListener("click", calcular);