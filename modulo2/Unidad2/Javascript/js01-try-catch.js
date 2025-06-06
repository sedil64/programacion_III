try{
    const user = JSON.parse('{"name":"Luis",edad:25}');
    console.log("Convertirse");
} catch{
    console.log("Hay un error convientiendo el json");
}

try{
    const user = JSON.parse('{"name":"Luis",edad:25}');
    console.log("Convertirse");
    throw new Error("Archivo no encontrado");
} catch(error){
    console.log("Hay un error convientiendo el json", error.message);
} finally {
    console.log("Termino el proceso");
}
