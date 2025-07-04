console.log("TIPOS DE VARIABLES")
console.log("VARIABLES PRIMITIVAS")
console.log("OPERADORES")


let mensaje = "Hola como estas?"; //string
let edad = 10; //number
let activo = true; //boolean
let vacio = null; //null
let x; //undefinded

console.log("Mensaje", mensaje, "tipo de variable: ", typeof mensaje);
console.log("Edad", edad, "tipo de variable: ", typeof edad);
console.log("Activo", activo, "tipo de variable: ", typeof activo);
console.log("vacio", vacio, "tipo de variable: ", typeof vacio);
console.log("x", x, "tipo de variable: ", typeof x);

console.log("2. vARIABLES NO PRIMITIVAS");
const persona = {
    nombre: "Dilan",
    Apellido: "Quistial"
}

console.log("Apellido", persona.apellido, "Tipo de variable: ",typeof persona);
persona.apellido="Gonzales";
console.log("Apellido", persona.apellido, "Tipo de variable: ",typeof persona);

const frutas = ["peras","manzana","naranja","piña"];
console.log("Frutas", frutas, "tipo de variable: ", typeof frutas);
const hoy = new Date();
console.log("Fecha actual", hoy, "tipo de variable: ", typeof hoy)
console.log("Expresiones regulares");
const regex =/[a-z]+/;
console.log(regex.test("9999"));


console.log("CONVERSIONES");
a = "10";
b = 5;
multiplicacion = a * b;
console.log("a ", a,"tipo de variable: ", typeof a);
console.log("b ", b,"tipo de variable: ", typeof b);
console.log("Resultado multiplicacion ", multiplicacion,"tipo de variable: ", typeof multiplicacion);