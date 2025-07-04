item = {
    precioUnitario: 23,
    cantidad: 3,
    iva: 3.4,
    nombre: "Laptop",
    subtotal: 0,
}

for (i in item){
    console.log(i, item[i])
}

usuario = {
    nombre: "Luis",
    saludar: function(){
        return "Hola soy" + this.nombre;
    }
}

console.log(usuario.saludar());

categoria = {
    nombre: "Electronica",
    producto: ["Laptop", "Monitor", "Teclado", {cantidad: 12, marca: "Sony"}],
    descripcion: {
        capacidad: "16hz",
        tamaño: "12 pulgadas"
    }
}

console.log(categoria);