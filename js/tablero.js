let movimientos = 1;
let celdaNueva = "";
const letras = ["a","b","c","d","e","f","g","h"]
//Generamos el tablero
addEventListener("DOMContentLoaded",function(){
    document.body.innerHTML += "<div class='wrapGeneral'>";
    for(let i = 0;i<8;i++){
        document.getElementsByClassName("wrapGeneral")[0].innerHTML += "<div class = 'wrap"+i+"'>";
        document.getElementsByClassName("wrap"+i)[0].innerHTML += letras[i];
        for(let j = 0; j<8;j++){
            if(i%2 == 0){
                if(j%2 == 0){
                    document.getElementsByClassName("wrap"+i)[0].innerHTML += "<div class='black' id='"+(letras[i]+j)+"'></div>"
                }else{
                    document.getElementsByClassName("wrap"+i)[0].innerHTML += "<div class='white' id='"+(letras[i]+j)+"'></div>"
                }
            }else{
                if(j%2 != 0){
                    document.getElementsByClassName("wrap"+i)[0].innerHTML += "<div class='black' id='"+(letras[i]+j)+"'></div>"
                }else{
                    document.getElementsByClassName("wrap"+i)[0].innerHTML += "<div class='white' id='"+(letras[i]+j)+"'></div>"
                }
            }
        }   
        document.getElementsByClassName("wrapGeneral")[0].innerHTML += "</div>";
    }
    document.getElementsByClassName("wrapGeneral")[0].innerHTML += "<div class='wrap'>";
    for(let i = 0; i<8; i++){
        document.getElementsByClassName("wrap")[0].innerHTML += "<div>"+i+"</div>";
    }
    document.getElementsByClassName("wrapGeneral")[0].innerHTML += "</div>";
    
    document.body.innerHTML += "</div>";

    //Colocamos una pieza
    document.getElementById(letras[Math.floor(Math.random()*letras.length)]+""+Math.floor(Math.random()*8)).innerHTML = "<div class='jugador'></div>";
    document.getElementById(letras[Math.floor(Math.random()*letras.length)]+""+Math.floor(Math.random()*8)).innerHTML = "<div class='npc'></div>";
});

let negro = document.getElementsByClassName("black");
let blanco = document.getElementsByClassName("white");

addEventListener("DOMContentLoaded",()=>{
    for(let i = 0; i<negro.length; i++){
        negro[i].addEventListener("click",function(){
            if(negro[i].childNodes[0] && negro[i].childNodes[0].classList[0] == "jugador"){
                    
                    //Celdas debajo
                    if(negro[i].id.split("")[1]<7){
                        for(let d = negro[i].id.split("")[1]; document.getElementById(negro[i].id.split("")[0]+d) && d <= parseInt(negro[i].id.split("")[1])+movimientos; d++){
                            document.getElementById(negro[i].id.split("")[0]+d).style.backgroundColor = "red";
                        }
                    }
                    //Celdas encima
                    if(negro[i].id.split("")[1]>0){
                        for(let d = parseInt(negro[i].id.split("")[1]); document.getElementById(negro[i].id.split("")[0]+d) && d>=(parseInt(negro[i].id.split("")[1])-movimientos); d--){
                            document.getElementById(negro[i].id.split("")[0]+d).style.backgroundColor = "red";
                        }
                    }
                    //Celdas derecha
                    if(negro[i].id.split("")[0]<"h"){
                        for(let d = letras.indexOf(negro[i].id.split("")[0]); document.getElementById(negro[i].id.split("")[0]+d) && d <= letras.indexOf(negro[i].id.split("")[0])+movimientos;d++){
                            document.getElementById(letras[d]+""+negro[i].id.split("")[1]).style.backgroundColor = "red";   
                        }
                    }
                    //Celda izquierda
                    if(negro[i].id.split("")[0]>"a"){
                        for(let d = letras.indexOf(negro[i].id.split("")[0]); document.getElementById(negro[i].id.split("")[0]+d) && d >= letras.indexOf(negro[i].id.split("")[0])-movimientos;d--){
                            document.getElementById(letras[d]+""+negro[i].id.split("")[1]).style.backgroundColor = "red";   
                        }
                    }

            }else if(negro[i].style.backgroundColor == "red"){
                celdaNueva = negro[i].id;
                mover("jugador",celdaNueva)
            }
        })
    }

    for(let i = 0; i<blanco.length; i++){
        blanco[i].addEventListener("click",function(){
            if(blanco[i].childNodes[0] && blanco[i].childNodes[0].classList[0] == "jugador"){
                
                    //Celdas debajo
                    if(blanco[i].id.split("")[1]<7){
                        for(let d = blanco[i].id.split("")[1]; document.getElementById(blanco[i].id.split("")[0]+d) && d <= parseInt(blanco[i].id.split("")[1])+movimientos; d++){
                            document.getElementById(blanco[i].id.split("")[0]+d).style.backgroundColor = "red";
                        }
                    }
                    //Celdas encima
                    if(blanco[i].id.split("")[1]>0){
                        for(let d = parseInt(blanco[i].id.split("")[1]); document.getElementById(blanco[i].id.split("")[0]+d) && d>=(parseInt(blanco[i].id.split("")[1])-movimientos); d--){
                            document.getElementById(blanco[i].id.split("")[0]+d).style.backgroundColor = "red";
                        }
                    }
                    //Celdas derecha
                    if(blanco[i].id.split("")[0]<"h"){
                        for(let d = letras.indexOf(blanco[i].id.split("")[0]); document.getElementById(blanco[i].id.split("")[0]+d) && d <= letras.indexOf(blanco[i].id.split("")[0])+movimientos;d++){
                            document.getElementById(letras[d]+""+blanco[i].id.split("")[1]).style.backgroundColor = "red";   
                        }
                    }
                    //Celda izquierda
                    if(blanco[i].id.split("")[0]>"a"){
                        for(let d = letras.indexOf(blanco[i].id.split("")[0]); document.getElementById(blanco[i].id.split("")[0]+d) && d >= letras.indexOf(blanco[i].id.split("")[0])-movimientos;d--){
                            document.getElementById(letras[d]+""+blanco[i].id.split("")[1]).style.backgroundColor = "red";   
                        }
                    }
            }else if(blanco[i].style.backgroundColor == "red"){
                celdaNueva = blanco[i].id;
                mover("jugador",celdaNueva)
            }
        })
    }
    
});

function mover(pieza,celdaNueva){
    //Comro
    //Elimnamos la pieza del sitio anterior
    document.getElementsByClassName(pieza)[0].remove();
    //Insertamos la pieza en la nueva celda
    document.getElementById(celdaNueva).innerHTML = "<div class='"+pieza+"'></div>";

    //Restablecemos las casillas a su color original
    for(let i = 0; i < negro.length; i++){
        if(negro[i].style.backgroundColor != "black"){
            negro[i].style.backgroundColor = "black"
        }
    }
    for(let i = 0; i < blanco.length; i++){
        if(blanco[i].style.backgroundColor != "white"){
            blanco[i].style.backgroundColor = "white"
        }
    }
}

function npc(){
    //El objetivo es que te persiga e intente comerse la pieza blanca

}