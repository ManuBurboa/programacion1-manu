const areacuadrado = () =>{
    const longitudladocuadrado = document.getElementById("inp_longladocuadrado").value;

    const areacuadrado = Math.pow(longitudladocuadrado , 2);

    document.getElementById("h_area_cuadrado").textContent = "El área del cuadrado: "+ areacuadrado;
} 
const botoncuadrado = document.getElementById("btn_cuadrado");
botoncuadrado.addEventListener("click",areacuadrado);
