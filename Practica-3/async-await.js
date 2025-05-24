function simularPeticionAPI(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            const datos = { nombre: "estre", edad: 20 };
            resolve(datos);
        },2000);
    });
}

async function obtenerDatos(){  
    try {
        const datos = await simularPeticionAPI();
        console.log(datos);
    }catch(error){
        console.error("Error al obtener los datos");
    }
}

obtenerDatos();