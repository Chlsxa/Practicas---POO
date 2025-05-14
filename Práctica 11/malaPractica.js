class Tienda{
    constructor(){
        this.inventario = [];
        this.clientes = [];
    }

    agregarProducto(producto){
        this.inventario.push(producto);
    }

    registrarCliente(cliente){
        this.clientes.push(cliente);
    }
    venderProducto(cliente, producto){
        console.log(`Vendido ${producto} a ${cliente}`); //la lohica esta mezclada en una sola clase
    }

    enviarEmail(cliente, mensaje){
        console.log(`Enviando correo a ${cliente}: ${mensaje}`);
    }
}

const tienda = new Tienda();
tienda.agregarProducto("Camisas");
tienda.registrarCliente("Ana");
tienda.venderProducto("Ana", "Camisas");
tienda.enviarEmail("Ana", "Gracias por tu compra");