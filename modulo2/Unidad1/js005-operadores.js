console.log("OPERADORES");
console.log("1. Operadores aritmeticos");
a = 10
b = 5
suma = a + b
console.log("Suma de ", a,"+",b, "es igual a:", suma);
console.log("Suma de ", a,"+",b, "es igual a:", a+b);
resta = a - b
console.log("Resta de ", a,"-",b, "es igual a:", resta);
console.log("resta de ", a,"-",b, "es igual a:", a-b);
multiplicacion = a * b
console.log("multiplicacion de ", a,"*",b, "es igual a:", multiplicacion);
division = a / b
console.log("division de ", a,"/",b, "es igual a:", division);

residuo = a % b
console.log("residuo de ", a,"%",b, "es igual a:", residuo);
potencia = a ** 2
console.log("potencia de ", a,"**",b, "es igual a:", potencia);

console.log("2.Operadores logicos:");
console.log("== Igualdad débil ", "5" == 5);
console.log("=== Igualdad estricta ", "5" === 5);
console.log("!= Desigualdad débil ", "5" != 5);
console.log("!== Desigualdad estricta ", "5" !== 5);

console.log("2.Operadores de comparacion:");
console.log("> Mayor que 6 > 5", 6 > 5);
console.log("< Menor que 6 < 5", 6 < 5);
console.log(">= Mayor que 6 >= 5", 6 >= 5);
console.log("<= Mayor que 6 <= 5", 6 <= 5);

console.log("3.Operadores ");
console.log("&& AND ", "5 > 4 && 2 < 2", 5 > 4 && 2 <2);
console.log("|| OR ", "5 > 4 || 5 < 2", 5 > 4 || 5 < 2);
console.log("! NOT ", "!( 5 > 4 )", !( 5 > 4 ));