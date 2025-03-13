const Persona = require('./persona');

class Padre extends Persona{

    constructor(nombre, edad, hijos){
        super(nombre, edad);
        this.hijos = hijos;
    }

    saludar(){
        console.log(`Hola soy ${this.nombre} y soy padre de ${this.hijos.length} hijos`);
    }

    presentarHijos(){
        console.log(`Mis hijos son: ${this.hijos.join(', ')}`);
    }
}

const padre = new Padre('Juan', 45, ['Pedro', 'María']);
padre.saludar();
padre.presentarHijos();