const areatrapecio =() => {
    const basesuperior = document.getElementById("inp_basesuperior").value
    const  baseinferior = document.getElementById("inp_baseinferior").value
    const altura = document.getElementById("inp_altura").value

    const suma = parseInt(basesuperior) + parseInt(baseinferior)
    const division = (suma / 2)
    const resultado = division * parseInt(altura)

    document.getElementById("h_trapecio").textContent = "El área de un trapecio es: " + resultado
}

const boton = document.getElementById("btn_trapecio");
boton.addEventListener("click", areatrapecio);