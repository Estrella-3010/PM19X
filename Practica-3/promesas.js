function verificarUsuario(usuario){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(usuario === "admin"){
                resolve("Usuario verificado");
            } else {
                reject("Usuario no verificado");
            }
        }, 2000);
    });
}

verificarUsuario("admin")
    .then((resolve) => {
        console.log(resolve);
    })
    .catch((reject) => {
        console.error(reject);
    })

verificarUsuario("invitado")
    .then((resolve) => {
        console.log(resolve);
    })
    .catch((reject) => {
        console.error(reject);
    })
