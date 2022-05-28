//Aplicación que calcula la potencia de un número
console.log("Simulador que calcula la potencia de un número")
//Pido mediante un prompt que ingrese datos
base = prompt("ingrese el numero que desea elevar: ")
exponente = prompt("ingrese el exponente: ")
//defino variables
resultado=1
//creo una función que utiliza los datos ingresados y devuelve como resultado
//la potencia del numero ingresado
//la función utiliza un ciclo para iterar
function potencia(base,exponente){
    for(i=1;i<=exponente;i++){
        resultado = base*resultado
    }
    return resultado;
}
//llamo a la función
potencia(base,exponente)
//muestro el resultado en consola
console.log(resultado)