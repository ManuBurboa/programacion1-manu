import Area from './area.js';
const areacuadrado = () =>{
    const longitudladocuadrado = document.getElementById("inp_longladocuadrado").value

    const instancia = new Area()

    instancia.ladocuadrado=longitudladocuadrado;

    const resareacuadrado = instancia.calcularareacuadrado()
    document.getElementById("h_area_cuadrado").textContent = resareacuadrado
} 
const botoncuadrado = document.getElementById("btn_cuadrado");
botoncuadrado.addEventListener ("click",areacuadrado);