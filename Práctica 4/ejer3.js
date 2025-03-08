class Vehiculo{
    constructor(marca, modelo, anio, kilometraje, disponible){
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.kilometraje = kilometraje;
        this.disponible = disponible;
    }

    get Marca(){
        return this.marca;
    }
    get Modelo(){
        return this.modelo;
    }
    get Anio(){
        return this.anio;
    }
    get Kilometraje(){
        return this.kilometraje;
    }
    get Disponible(){
        return this.disponible;
    }

    AumentarKilometraje(kilometros){
        if(kilometros > 0 && kilometros > this.kilometraje){
            this.kilometraje += kilometros;
        }else{
            console.log("No se puede aumentar el kilometraje");
        }
    }

    CambiarDisponibilidad(){
        this.disponible = !this.disponible;
    }

    MostrarInfo(){
        console.log(`Marca: ${this.marca}\nModelo: ${this.modelo}\nAño: ${this.anio}\nKilometraje; ${this.kilometraje}\nDisponible: ${this.disponible}`);
    }
}

const vehiculo1 = new Vehiculo ("Toyota", 2020, 1000, true);
console.log(vehiculo1.Marca);