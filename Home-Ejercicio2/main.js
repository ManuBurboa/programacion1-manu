const calcular = () =>{
    const dato1 = document.getElementById("inp_dato1").value;
    const dato2 = document.getElementById("inp_dato2").value;

    const select = document.getElementById("slt_metodo").value;
    let resultado = null;
    if (select == 0){

        resultado = dato1 / dato2;
    }
    else{
        if(select == 1){
            resultado = dato1 * dato2;
        }
        else{
            resultado = dato1 * Math.pow(dato2,2);
        }
    }
    document.getElementById("h_resultado").textContent= "el resultado es: " + resultado

}  
const boton = document.getElementById("btn_calcular");
boton.addEventListener("click",calcular);