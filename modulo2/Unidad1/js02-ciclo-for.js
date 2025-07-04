for (let i=1; i<=5; i++){
    console.log("Iteración: ", i);
}

for (let i=1; i<=12; i++){
    console.log("2 x", i, "=", i*2)
}

let suma = 0;
for (let i=1; i<=10; i++){
    if (i%2 == 0){
        suma+=i;
    }
}
console.log("Suma de los numeros pares:", suma);

for (let i=1; i<=10; i++){
    console.log(i*i)
}

let palabra = "Welcome to Javascript";
for (let i = 0; i <= palabra.length(); i++){
    console.log(palabra[i])
}