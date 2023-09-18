var arreglos = [1,2,3,4,5,6,7,8];
for (var i = 0; i < arreglos.length; i ++){
    console.log(arreglos[i]);
}

function encontrarP(string){
    var letras = string.split("");

    for (var i = 0; i < letras.length; i ++){
        if (letras [i] === "p"){
            console.log("Si contiene a p")
        }
    }
}

encontrarP("Henry");
encontrarP("JavaScript");