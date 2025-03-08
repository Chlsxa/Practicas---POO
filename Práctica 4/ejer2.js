class Estudiante{
    _nombre;
    _edad; 
    _promedio;
    _activo;
    constructor(nombre, edad, promedio, activo){
        this._nombre = nombre;
        this._edad = edad;
        this._promedio = promedio;
        this._activo = activo;
    }

    getNombre(){
        return this._nombre;
    }
    getEdad(){
        return this._edad;
    }
    getPromedio(){
        return this._promedio;
    }
    getActivo(){
        return this._activo;
    }
    setNombre(nombre){
        this._nombre = nombre;
    }
    setEdad(edad){
        this._edad = edad;
    }
    setPromedio(promedio){
        this._promedio = promedio;
    }
    setActivo(activo){
        this._activo = activo;
    }
    ActualizarPromedio(nuevaCalificacion){
        if(this._edad > 0 && nuevaCalificacion > 0 && nuevaCalificacion < 10 && this._activo){
            this._promedio = nuevaCalificacion;
        }else{
            console.log("No se puede actualizar el promedio");
        }
    }

    CambiarEstado(){
        this._activo = !this._activo;
    }

    MostrarInfo(){
        console.log(`Nombre: ${this._nombre}`);
        console.log(`Edad: ${this._edad}`);
        console.log(`Promedio: ${this._promedio}`);
        console.log(`Activo: ${this._activo}`);
    }
}

const estudiante1 = new Estudiante ("Juan", 20, 8.5, true);
console.log(estudiante1.getNombre());
estudiante1.ActualizarPromedio();