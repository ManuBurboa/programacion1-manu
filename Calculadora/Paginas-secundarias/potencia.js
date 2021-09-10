const calcular =() =>{
    const a = document.getElementById("inp_numero1").value;
    const b = document.getElementById("inp_numero2").value;

    const resultado = Math.pow(a,b);

    document.getElementById("h_resultado").textContent= 'La potencia es: ' +resultado
}
const boton=document.getElementById("btn_calcular");
boton.addEventListener("click",calcular);