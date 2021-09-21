const triangulo = () =>{
    const base = document.getElementById("inp_base").value
    const altura = document.getElementById("inp_altura").value
    
    const multiplicacion = parseInt(base) * parseInt(altura);
    const resultado = multiplicacion / 2

    document.getElementById("h_area_triangulo").textContent = "El área del triangulo: "+ resultado;
} 
const boton = document.getElementById("btn_triangulo");
boton.addEventListener("click",triangulo);