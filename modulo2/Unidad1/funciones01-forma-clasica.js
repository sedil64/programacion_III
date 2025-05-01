function saludar(){
    console.log("Hola desde una función");
}
saludar();

function suma(){
    console.log("Suma 1 + 2 = ", 1+2);
}

suma();

function resta(){
    console.log("Resta 2 - 1 = ", 2-1);
}

resta();


function dividir(a,b) {
    return a/b;
}

var resultado = dividir(40,5);
console.log("Resultado de: ", resultado)

function tabla(num){
    for (i=0;i<=num;i++){
        console.log(num, "x", i, "=",num*i);
    }
}

tabla(5);