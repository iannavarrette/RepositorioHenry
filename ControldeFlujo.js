function viajar (destino) {
    if (destino === "Brazil") {
        console.log("Gire a la Izquierda");
    } else if (destino === "Argentina") {
        console.log("Gire a la Derecha");
    } else {
        console.log("Perdidos");
    }

}

viajar("Mexico");

function puedemanejar (edad) {
    if (edad >= 18){
        console.log(true);
    } else {
        console.log(false);
    }
}

puedemanejar (10);