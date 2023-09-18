var listadeCompras = [];
listadeCompras[3] = "Tomates";
listadeCompras[1] = "Lechuga";

console.log(listadeCompras);
console.log(listadeCompras[1]);

var elementoarreglo = listadeCompras[0];
console.log(elementoarreglo);
console.log(listadeCompras.length);

var nombres = ["ana", "maria", "luci", "mario"].length;
console.log(nombres);

var colores = ["azul", "rojo", "amarillo"];
colores.push("morado");
colores.unshift("Verde");
colores.pop();
colores.shift();
console.log(colores);

var incluyemorado = colores.includes("morado");
var incluyerojo = colores.includes("rojo");
console.log(incluyemorado);
console.log(incluyerojo);

var numeros = [1,2,3,4,5];
var cumplecondicion = numeros.every((num) => {
    return num > 5;
});

console.log(cumplecondicion);

var numeros = [ 1, 2, 3, 4 ];
numeros.forEach( (num) => { console.log(num) } )

// MAP
var numeros = [ 1, 2, 3, 4 ];
var masUno = numeros.map( (num) => { return num + 1 } );

console.log(masUno);

//split y join
var palabra = "Henri";
var palabraSeparada = palabra.split("");
palabraSeparada.pop();
palabraSeparada.push("y");
console.log(palabraSeparada);
var palabraArreglada = palabraSeparada.join("");
console.log(palabraArreglada);