console.log("Simulador que calcula la potencia de un número")

base = prompt("ingrese el numero que desea elevar: ")
exponente = prompt("ingrese el exponente: ")

resultado=1
function potencia(base,exponente){
    for(i=1;i<=exponente;i++){
        resultado = base*resultado
    }
    return resultado;
}

potencia(base,exponente)

console.log(resultado)