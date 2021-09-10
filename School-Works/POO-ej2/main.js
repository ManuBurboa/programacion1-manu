import Area from './area.js'
const mostrar =() => {
    const bs = document.getElementById("inp_bs").value
    const bi = document.getElementById("inp_bi").value
    const altura = document.getElementById("inp_altura").value

    const instancia = new Area()
    
    instancia.bs=bs
    instancia.bi=bi
    instancia.altura=altura
    const repuesta = instancia.calcularAreaTrap()
    document.getElementById("h_resul").textContent = repuesta
}

const boton = document.getElementById("btn_calcular");
boton.addEventListener("click", mostrar);

const mostrar2 = () =>{
    const bt = document.getElementById("inp_bt").value
    const at = document.getElementById("inp_at").value

    const instacia2 = new Area()

    instacia2.bt=bt
    instacia2.at=at
    const resultado2 = instacia2.calcularAreaTria()
    document.getElementById("h_resul2").textContent = resultado2
}
const boton2 = document.getElementById("btn_calcular2");
boton2.addEventListener("click",mostrar2)


 