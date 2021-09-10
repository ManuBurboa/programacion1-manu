import Empleado from './empleado.js'
const mostrar_datos = () => {  

    const nom = document.getElementById("inp_nombre");
    const ape = document.getElementById("inp_apellido");

    const instacia = new Empleado(nom , ape)
    instacia.mostrarDatosEmpleados()


}
const boton = document.getElementById("btn_guardar");
boton.addEventListener("click", mostrar_datos);