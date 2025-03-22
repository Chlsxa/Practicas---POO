const Aurenticacion = {
    login(usuario){
        console.log(`${usuario} ha iniciado sesión.`);
    }
};

const Notificaciones ={
    enviarNotificacion(mensaje){
        console.log(`Notificación: ${mensaje}`);
    }
};

class Usuario {
    constructor(nombre){
        this.nombre = nombre;
    }
}

Object.assign(Usuario.prototype, Aurenticacion, Notificaciones);

const user1 = new Usuario ("Ana Goméz");
user1.login(user1.nombre);
user1.enviarNotificacion("Tienes un nuevo mensaje");