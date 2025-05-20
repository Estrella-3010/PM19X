//ejericico a 

const persona = {
    nombre: "Estrella", 
    edad: 20,
    direccion:{
        ciudad:"Quéretaro",
        pais:"MX"
    }   
}

const {nombre, edad, direccion:{ciudad, pais}} = persona;
console.log("Me llamo " + nombre + ", tengo " + edad + " años y vivo en " + ciudad + ", " + pais);

