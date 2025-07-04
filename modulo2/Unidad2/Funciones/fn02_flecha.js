//Funcion flecha
const saludar = ()=> {
    console.log("hola desde arrow funcion");
}
saludar();

const cuadrado1 = (num)=> {
    console.log("cuadrado de", num ,"igual a ", num*num);
}
cuadrado1(6);

let num = prompt("Ingrese un numero: ");
num = Number(num);
const cuadrado2 = (num)=> {
    alert("Ingreso un numero", num ,"igual a ", num*num);
}
cuadrado2(num);

//retorno directo
const cuadrado = x=> x*x;
console.log("5x5=",cuadrado(5))