const paralelogramo = () =>{
    const base = document.getElementById("inp_base").value
    const altura = document.getElementById("inp_altura").value
    
    const resultado = parseInt(base) * parseInt(altura);

    document.getElementById("h_area_paralelogramo").textContent = "El área del paralelogramo: "+ resultado;
} 
const boton = document.getElementById("btn_paralelogramo");
boton.addEventListener("click",paralelogramo);