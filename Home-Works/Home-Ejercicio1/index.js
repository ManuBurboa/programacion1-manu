const calcular=()=>{ 
    const CO = document.getElementById("inp_CO").value;
    const CA = document.getElementById("inp_CA").value;

    const parte1 = Math.pow(CO,2) + Math.pow(CA,2);

    const resultado = Math.sqrt(parte1);
    document.getElementById("h_resultado").textContent= 'el resultado es: ' +resultado
}
const boton=document.getElementById("btn-calcular1");
boton.addEventListener("click",calcular);