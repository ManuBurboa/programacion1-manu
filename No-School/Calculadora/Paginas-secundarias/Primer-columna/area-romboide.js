const romboide = () =>{
    const base = document.getElementById("inp_base").value
    const altura = document.getElementById("inp_altura").value
    
    const resultado = parseInt(base) * parseInt(altura);

    document.getElementById("h_area_romboide").textContent = "El área del romboide es: "+ resultado;
} 
const boton = document.getElementById("btn_romboide");
boton.addEventListener("click",romboide);