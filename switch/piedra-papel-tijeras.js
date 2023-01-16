var p = "piedra"
var t = "tijeras"
var pa = "papel"
function resultadoGanador(user, cpu){
    switch(true){
        case user === cpu :
            console.log("empataste")
            break;
        case user === p && cpu === t :
            console.log("ganaste!")
            break;
        case user === t && cpu === pa :
            console.log("ganaste!")
            break;
        case user === pa && cpu === p :
            console.log("ganaste!")
            break;
        default:
            console.log("perdiste contra el mejor!")
    }
}

