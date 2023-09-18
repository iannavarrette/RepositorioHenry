// FUNCIÓN CONSTRUCTORA
function Auto(puertas, color, marca, año, ruedas) {
    this.puertas = puertas;
    this.color = color;
    this.marca = marca;
    this.año = año;
    this.ruedas = ruedas;

    this.informacion = function() {
        console.log("Esta es la informacion de " + this.marca + "de color " + this.color);
     };
 }


 let miPrimerAuto = new Auto(2, 'Rojo', 'Ferrari', 2018, 4);
 console.log(miPrimerAuto);
 console.log(miPrimerAuto.marca);
 
 miPrimerAuto.informacion();

 // EXPRESIÓN DE CLASE ---------------------------------------------------------------------------------
class Mauto {
    constructor(puertas, color, marca, año, ruedas) {
       this.puertas = puertas;
       this.color = color;
       this.marca = marca;
       this.año = año;
       this.ruedas = ruedas;
    }
    informcion(){
        console.log ("Este es un" + this.marca + " del año " + this.año);
       }
 }
 let miSegundoAuto = new Mauto(4, 'Blanco', 'Fiat', 2015, 4);
 console.log(miSegundoAuto);
 console.log(miSegundoAuto.marca);

 class Futball{
    constructor(jugador){
        this.jugador = jugador;

    }
    obtenerNombre (){
        console.log(this.jugador);
    }
 }

 var argentina = new Futball("Messi");
 var brazil = new Futball("Pele");

 argentina.obtenerNombre();
 brazil.obtenerNombre();