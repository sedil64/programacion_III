var i=0;

while (i<=5) {
    console.log("Iteración While:",i);
    i++;
}
var i=0;
while (i<=12){
    console.log("2 x", i, "=", i*2);
    i++;
}

var i=0;
do {
    console.log("2 x", i, "=", i*2);
    i++;
} while(i<=12);

var i=10;
do {
    console.log('i',i);
    i--;
} while(i>=6);


var animales = ["perro", "gato", "leon", "tigre", "pato", "gallina", "cerdo", "serpiente"]
var i = 0;
do {
    console.log(animales[i]);
    i++;
} while(i<animales.length)