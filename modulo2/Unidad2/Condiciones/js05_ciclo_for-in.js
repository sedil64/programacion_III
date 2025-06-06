const persona={
    nombre:"Luis",
    apellido:"Perez",
    edad:10,
    direccion:"av amazonas",
    telefono:"0992523644"
}
console.log("nombre",persona["nombre"]);
console.log("apellido",persona["apellido"]);

console.log("ciclo for in");

for(const clave in persona){
    console.log(clave,":",persona[clave])
}

const producto={
    nombre:"laptop",
    precio:1000,
    descripcion:"i7 13va generacion 500gb SSD"
}
for(const clave in producto){
    console.log(clave,":",producto[clave])
}