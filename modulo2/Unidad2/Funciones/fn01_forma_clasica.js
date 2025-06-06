//Mejora la legilidad
//ayuda a llamarlo en otra parte

//forma clasica
function saludar(){
    console.log("hola desde la funcion");
}
saludar();
saludar();
saludar();

function suma(){
    console.log("sumar 1+2=",1+2);
}
suma();

function resta(){
    console.log("sumar 1-2=",1-2);
}
resta();

//funcion con parametros y retorno
function dividiir(a,b){
    return a/b;
}
let result = dividiir(40,8);
console.log("Resultado: ", result);

//Hacer una funcion que se le pase un numero e imprima la tabla de multil 
function tablaMultiplicar(a){
    for(let i=1; i<=15; i++){
        console.log(a,"x", i,"=", a*i)
    }
}
tablaMultiplicar(2);

