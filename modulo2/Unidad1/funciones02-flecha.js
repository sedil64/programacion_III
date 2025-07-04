const saludar = () => {
    console.log("Hola desde una función flecha");
}

saludar();

const cuadrado1 = (num)=> {
    console.log("cuadrado de ",num, "=", num*num)
}
cuadrado1(5);

const cuadrado = x => x*x;
console.log("cuadrado: ", cuadrado(5))

let num1 = prompt("Ingrese un número");
const cuadrado2 = (num1) => {
    alert("Cuadrado de " + num1 + " = " + (num1 * num1));
}
cuadrado2(num1);
