//Manipulacion
let alumno= {
    nombre: "Juan",
    apellido: "ampies",
    direccion: "av.amazonas",
    telefono: 212135415364
}
console.log(alumno);

//Acceder a propiedades
console.log(alumno.apellido);
console.log(alumno["nombre"]);

//Modificar propiedades
alumno.apellido = "Lopez";
alumno["direccion"]="av.bolivar";

console.log(alumno);

//incluir nueva propiedad
alumno.promedio = 9;

console.log(alumno);

// eliminar la propiedad del objeto
delete alumno.promedio;
console.log(alumno);

//
alumnoClonado = {...alumno};
alumnoClonado.nombre = "Antonio";
alumnoClonado.apellido = "Apellido";

console.log(alumnoClonado);

// Multiplicar precio unitario * cantidad y sumarle IVA
item = {
    precioUnitario: 23,
    cantidad: 3,
    iva: 3.4,
    nombre:"Laptop",
    subtotal: 0
}

item.subtotal = item.precioUnitario * item.cantidad +item.iva;
console.log(item);

for(let clave in item){
    console.log(clave + ':' + item[clave]);
}

// Lista las claves
console.log(Object.keys(item));

// Lista los valores
console.log(Object.values(item));

//Metodos o funciones en objetos
usuario = {
    nombre:"Luis",
    saludar:function(){
        return "Hola soy " + this.nombre;
    }
}
console.log(usuario.saludar());

// Objetos anidos
categoria = {
    nombre:"electonica",
    productos:["laptop","monitor","teclado", {
        cantidad: 12,
        marca:"Sony"
    }],
    description:{
        capacidad:"16hz",
        tamaño:"12 pulgadas"
    }
}
console.log(categoria);


