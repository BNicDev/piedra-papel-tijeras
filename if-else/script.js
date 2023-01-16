var opc1 = "piedra";
var opc2 = "papel";
var opc3 = "tijeras";

var resultado = function(user, cpu){
    if(user!=cpu){
        if(user===opc1 && cpu===opc2){
            console.log("gano la cpu con " + opc2)
        }else if(user===opc2 && cpu===opc3){
            console.log("gano la cpu con " + opc3)
        }else if(user===opc3 && cpu===opc1){
            console.log("gano la cpu con " + opc1)
        }else(
            console.log("gano el usuario")
        )
    }else{
        console.log("ambos jugadores empataron")
    }
}

resultado(opc3, opc2);