const personas = [
    {nombre: "Estre", edad: 20},
    {nombre: "Lucero", edad: 20},
    {nombre: "Juan", edad: 20},
]

const nombre = personas.find(persona => persona.nombre === "Juan");
console.log(nombre);

personas.forEach(element => {
    console.log(element.nombre, element.edad);
});

const suma = personas.reduce((acumulador, persona) => {
    return acumulador + persona.edad;
}, 0);
console.log("La suma de las edades = "+suma);

