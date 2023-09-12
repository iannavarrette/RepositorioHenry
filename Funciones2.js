var sumaTres = (x) => {
    return x + 3;
    }

function CuidadoConElConsolelog(nombre) {
    console.log(nombre);
    return nombre;
}

function otraFuncion () {
    return (
        "El nombre retornado por la funcion "CuidadoConElConsolelog" 
        es:" + CuidadoConElConsolelog("Camilo")
    );
}

function CuidadoConElConsolelog (nombre) {
    return nombre;
    console.log(nombre);
}