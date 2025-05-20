//ejercicio b

const productos =[
    {nombre:"Laptop", precio: 1200},
    {nombre:"Mouse", precio: 250},
    {nombre:"Teclado", precio: 750},
    {nombre:"Monitor", precio: 3000},
]

const precios = productos.filter(productos => productos.precio > 1000)
//console.log(precios);

const nombres = precios.map(productos => productos.nombre)
console.log(nombres);