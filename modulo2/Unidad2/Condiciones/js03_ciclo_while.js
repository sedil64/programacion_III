let i;
while(i<=5){
    console.log("Iteracion while: ",i);
    i++;
}

let cont=1;
while(cont<=10){
    console.log(3,"x", cont,"=", 3*cont)
    cont++;
}

let mult=1;
console.log("Do...While")
do{
    console.log(5,"x", mult,"=", 5*mult)
    mult++;
}while(mult<=10);

let n=10;
do{
    console.log("n",n)
    n--;
}while(n>=6);

let animales=["perro","gato","oso","panda"];
let animal=0;
do{
    console.log("Animal",animal,"es: ", animales[animal])
    animal++;
}while(animal<=9);