//Funcion anonima
console.log("funcion anonima");

setTimeout(function(){
    console.log("Hola desde la funcion ")
}, 3000);

let mensaje = function (){
    return "Mensaje desde una funcion anonima";
}
console.log(mensaje());