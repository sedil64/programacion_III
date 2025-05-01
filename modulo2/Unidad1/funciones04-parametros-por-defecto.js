function saludar(nombre="Invitado"){
    console.log("Bienvenido/a",nombre);
}

saludar();
saludar("Luis");

function multiplicar(num1=5, num2=10){
    console.log("Multiplicacion de",num1,"x",num2,"=",num1*num2);
}

multiplicar();
multiplicar(3);
multiplicar(5,6);

function area(base=1,altura=2){
    resultado = (base*altura)/2
    console.log("El area es:", resultado);
}

area();
area(2);
area(2,5);

var notas = [1,2,3,4,5,6,7,8,9]

function promedio(lista){
    var resultado=0;
    for (lst in lista){
        resultado += lista[lst];
    }
    console.log("El promedio es:", resultado/lista.length)
}

promedio(notas);