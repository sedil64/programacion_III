let numeros = [2,3,4,5,8,63]
for(num of numeros){
    console.log("numero", num);
}

let vacio = new Array();
for(v of vacio){
    console.log("arreglo", v);
}
console.log(vacio);

console.log("elemento 0", numeros[0]);
console.log("elemento 1", numeros[1]);
console.log("elemento 2", numeros[2]);

numeros[0] = 15;
numeros[1] = 15;

console.log("arreglo", numeros);


//Añadir al final
numeros.push(50);
//Añadir al inicio
numeros.unshift(70);
console.log("arreglo", numeros);

//Eliminar ultimo
numeros.pop();
//Eliminar el primero
numeros.shift();
console.log("arreglo", numeros);
