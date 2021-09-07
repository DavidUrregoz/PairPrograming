//Imprimir los primeros numeros de la serie de Fb
var arreglo=[];
arreglo.push(0);
let limiteNumeros = prompt("Cuantos Numeros de la serie quiere que sean mostrados");
limiteNumeros=parseInt(limiteNumeros) - 2;
let contador=0;
let variableTemporal=1;
while(contador<=limiteNumeros){//contador<=limitenumeros
    arreglo.push(variableTemporal);
    variableTemporal = arreglo[contador]+arreglo[contador+1];
    contador+=1;
}
console.log(arreglo);
alert(arreglo);