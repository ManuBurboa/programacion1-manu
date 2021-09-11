const arearectangulo = () =>{
    const baserectangulo = document.getElementById("inp_baserectangulo").value
    const alturarectangulo = document.getElementById("inp_alturarectangulo").value
    
    const arearectangulo = parseInt(baserectangulo) * parseInt(alturarectangulo);

    document.getElementById("h_area_rectangulo").textContent = "El área del rectángulo: "+ arearectangulo;
} 
const botonrectangulo = document.getElementById("btn_rectangulo");
botonrectangulo.addEventListener("click",arearectangulo);