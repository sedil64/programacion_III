setTimeout(function() {
    console.log("Este mensaje aparece después de 2 segundos.");
}, 2000);

let mensaje = function(){
    return "Mensaje desde una funcion"
}

console.log(mensaje());