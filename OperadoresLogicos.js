function mayormenor(num){
    if (num > 5 && num < 10 && num % 2 == 0) console.log(true);
    else console.log(false);
}

mayormenor(6);
mayormenor(9);

function mayormenor(num){
    if (num > 5 || num < 10 || num % 2 == 0) console.log(true);
    else console.log(false);
}

mayormenor(2);
mayormenor(9);
mayormenor(13);

function negacion(permiso){
    if (permiso) console.log("Tiene permiso");
};

negacion(true);
negacion(false);

function negacion(permiso){
    if (!permiso) console.log("Tiene permiso");
};

negacion(true);
negacion(false);

function negacion(permiso){
    if (permiso == true) console.log("Tiene permiso");
};

negacion(true);
negacion(false);

//NOT
function negacion(permiso){
    if (permiso != true) console.log("Tiene permiso");
};

negacion(true);
negacion(false);

console.log("ejercicio 2:");

function condicionCompleja(num){
    if(num > 9 && num % 2 == 0 || num == 3) console.log(true);
    else console.log(false);
}

condicionCompleja(10);
condicionCompleja(6);
condicionCompleja(3);
condicionCompleja(5);

// OR
function operadorOr(str) {
    if (str === 'Henry' || str.length < 2) console.log(true);
    else console.log(false);
 }
 operadorOr('Henry');
 operadorOr('Javascript');
 operadorOr('H');