const persona = {nombre:"nombre", apellido:"Perez", edad:10, direccion:"Su casa", telefono: "0123456789"}

for (const per in persona){
    console.log(per, persona[per])
}

const producto = {nombre:"Laptop", precio: 1000, descripcion: "Esto es una descripcion de laptop :D"}

for (const prod in producto){
    console.log(prod, ":", producto[prod])
}