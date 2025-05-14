class Inventario{
    constructor(){
        this.productos = [];    
    }

    agregarProducto(producto){
        this.productos.push(producto);
    }

    listar(){
        return
    }
}

class Cliente{
    constructor(nombre, correo){
        this.nombre = nombre;
        this.correo = correo;
    }
}

class Notificador{
    static enviarCorreo(destinatario, mensaje){
        console.log(`Correo a ${destinatario.correo}: ${mensaje}`);
    }
}

class Tienda{
    constructor(){
        this.inventario = new Inventario();
        this.clientes = [];
    }

    venderalCliente(cliente, producto){
        if (this.inventario.productos.includes(producto)){
            console.log(`Venta realizada: ${producto} a ${cliente.nombre}`);
            Notificador.enviarCorreo(cliente, `Gracias por comprar`);
        }else {
            console.log("Producto no disponible");
        }
    }
}

const tienda = new Tienda();
const cliente1 = new Cliente("Ana", "ana@mail.com");

tienda.inventario.agregarProducto("Camisas");
tienda.registrarCliente(cliente1);
tienda.venderalCliente(cliente1, "Camisas");