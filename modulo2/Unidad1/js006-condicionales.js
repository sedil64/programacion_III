console.log("Condicionales");
console.log("If Simple");
temperatura = 35;
if (temperatura > 30){
    console.log("Hace calor");
}

console.log("If else")
usuario_log = true;
if (usuario_log){
    console.log("Aprovado")
} else {
    console.log("Inicia Sesion");
}

consoleconsole.log("If else if else")
nota = 9;

if (nota >= 9){
    console.log("Excelente");
} else if (nota >= 6){
    console.log("Aprovado")
} else {
    console.log("Reprovado")
}

consoleconsole.log("If anidado")
edad = 18;
licencia = true;

if (edad >= 18){
    if (licencia ){
        console.log("Conduce");
    } else {
        console.log("No licencia");
    }
} else {
    console.log("No edad")
}


consoleconsole.log("If con op logicos");
let estudiante = true;
let descuento = true;
if (estudiante && descuento){
    console.log("Descuento")
}

admin = true;
editor = false;
if (admin || editor){
    console.log("Editar")
}