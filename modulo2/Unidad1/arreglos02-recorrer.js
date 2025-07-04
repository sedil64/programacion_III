let numeros = [2,3,4,5,6,7,8];
for (num of numeros){
    console.log("numero", num)
}

let ciudades = ["Quito","Guayaquil","Cuenca","Loja"];
for(i=0;i<ciudades.length;i++){
    console.log("Ciudad", ciudades[i])
}

let colores = ["azul", "amarrilo", "verde", "rojo", "negro"];
colores.forEach(function(valor, indice){
    console.log("color",indice, ":",valor);
})