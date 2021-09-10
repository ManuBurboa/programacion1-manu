export default class Area{
    bs;
    bi;
    altura;
    bt;
    at;
    calcularAreaTrap(){
        const suma = parseInt(this.bs) + parseInt(this.bi)
        const division = suma / 2
        const resultado = division * parseInt(this.altura) 
        return resultado
    }
    calcularAreaTria(){
        const multiplicacion = parseInt(this.bt) * parseInt(this.at)
        const resultado2 = multiplicacion / 2
        return resultado2
    }
}

