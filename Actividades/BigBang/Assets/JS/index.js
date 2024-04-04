const path = "../Assets/Img/";

const rock = path + "piedra.jpg";
const paper = path + "papel.jpg";
const scissors = path + "tijeras.jpg";
const lizard = path + "lagarto.jpg";
const spock = path + "spoke.jpg";
const opcion = document.getElementById("maquina");
let victorias = 0;
let derrotas = 0;
function play() {
    setTimeout(function () {
        random();
    }, 200);
    setTimeout(function () {
        random();
    }, 300);
    setTimeout(function () {
        random();
    }, 400);
    setTimeout(function () {
        random();
    }, 500);
    setTimeout(function () {
        random();
    }, 600);
    setTimeout(function () {
        random();
    }, 700);
    setTimeout(function () {
        random();
    }, 800);
    setTimeout(function () {
        random();
    }, 900);
    setTimeout(function () {
        random();
    }, 1000);
    setTimeout(function () {
        results();
    }, 1100);
    setTimeout(function () {
        getPoints();
    }, 1200);

}
document.getElementById("play").addEventListener("click", function () {
    play();
});
//TODO
//Add all 5 images to listener
document.getElementById("lagarto").addEventListener("click", function () {
    let link = document.getElementById("imlagarto").getAttribute("src");
    document.getElementById("jugador").setAttribute("src", lizard);
});
document.getElementById("papel").addEventListener("click", function () {
    let link = document.getElementById("impapel").getAttribute("src");
    document.getElementById("jugador").setAttribute("src", paper);
});
document.getElementById("piedra").addEventListener("click", function () {
    let link = document.getElementById("impiedra").getAttribute("src");
    document.getElementById("jugador").setAttribute("src", rock);
});
document.getElementById("spoke").addEventListener("click", function () {
    let link = document.getElementById("imspoke").getAttribute("src");
    document.getElementById("jugador").setAttribute("src", spock);
});
document.getElementById("tijeras").addEventListener("click", function () {
    let link = document.getElementById("imtijeras").getAttribute("src");
    document.getElementById("jugador").setAttribute("src", scissors);
});



function results() {
    let link = document.getElementById("jugador").getAttribute("src");
    let opcion = "";
    switch (link) {
        case "../Assets/Img/lagarto.jpg":
            opcion = "Lagarto";
            break;
        case "../Assets/Img/papel.jpg":
            opcion = "Papel";
            break;
        case "../Assets/Img/piedra.jpg":
            opcion = "Piedra"
            break;
        case "../Assets/Img/spoke.jpg":
            opcion = "Spoke"
            break;
        case "../Assets/Img/tijeras.jpg":
            opcion = "Tijeras"
            break;
        default:
            break;
    }
    let resp = document.getElementById("maquina").getAttribute("src");
    let maquina = "";
    switch (resp) {
        case "../Assets/Img/lagarto.jpg":
            maquina = "Lagarto";
            break;
        case "../Assets/Img/papel.jpg":
            maquina = "Papel";
            break;
        case "../Assets/Img/piedra.jpg":
            maquina = "Piedra"
            break;
        case "../Assets/Img/spoke.jpg":
            maquina = "Spoke"
            break;
        case "../Assets/Img/tijeras.jpg":
            maquina = "Tijeras"
            break;
        default:
            break;
    }

    let resultados = new Array("Has Ganado!!", "Has perdido", "Habeis Empatado");
    let resultado = "";
    // Con el switch ponemos las diferentes opciones del usuario
    switch (opcion) {
        case "Piedra":
            // Con este switch expondremos las diferentes opcions de la maquina y daremos el resultado acorde a ello
            switch (maquina) {
                case "Piedra":
                    resultado = resultados[2];
                    break;
                case "Papel":
                    resultado = resultados[1];
                    break;
                case "Tijeras":
                    resultado = resultados[0];
                    break;
                case "Lagarto":
                    resultado = resultados[0];
                    break;
                case "Spoke":
                    resultado = resultados[1];
                    break;
            }

            break;
        case "Papel":
            switch (maquina) {
                case "Piedra":
                    resultado = resultados[0];
                    break;
                case "Papel":
                    resultado = resultados[2];
                    break;
                case "Tijeras":
                    resultado = resultados[1];
                    break;
                case "Lagarto":
                    resultado = resultados[1];
                    break;
                case "Spoke":
                    resultado = resultados[0];
                    break;
            }

            break;
        case "Tijeras":
            switch (maquina) {
                case "Piedra":
                    resultado = resultados[1];
                    break;
                case "Papel":
                    resultado = resultados[0];
                    break;
                case "Tijeras":
                    resultado = resultados[2];
                    break;
                case "Lagarto":
                    resultado = resultados[0];
                    break;
                case "Spoke":
                    resultado = resultados[1];
                    break;
            }
            break;
        case "Lagarto":
            switch (maquina) {
                case "Piedra":
                    resultado = resultados[1];
                    break;
                case "Papel":
                    resultado = resultados[0];
                    break;
                case "Tijeras":
                    resultado = resultados[1];
                    break;
                case "Lagarto":
                    resultado = resultados[2];
                    break;
                case "Spoke":
                    resultado = resultados[0];
                    break;
            }
            break;
        case "Spoke":
            switch (maquina) {
                case "Piedra":
                    resultado = resultados[0];
                    break;
                case "Papel":
                    resultado = resultados[1];
                    break;
                case "Tijeras":
                    resultado = resultados[0];
                    break;
                case "Lagarto":
                    resultado = resultados[1];
                    break;
                case "Spoke":
                    resultado = resultados[2];
                    break;
            }
            break;
    }
    if (resultado == resultados[0]) {
        victorias = victorias + 1;
    } else if (resultado == resultados[1]) {
        derrotas = derrotas + 1;
    }
    document.getElementById('resultado').innerHTML = resultado;


}

function getPoints() {
    document.getElementById('pjugador').innerHTML = "Points:" + victorias;
    document.getElementById('pmaquina').innerHTML = "Points:" + derrotas;

}
function random() {
    const ran = Math.floor(Math.random() * 5);
    switch (ran) {
        case 1:
            opcion.setAttribute("src", rock);
            break;
        case 2:
            opcion.setAttribute("src", paper);
            break;
        case 3:
            opcion.setAttribute("src", scissors);
            break;
        case 4:
            opcion.setAttribute("src", lizard);
            break;
        case 5:
            opcion.setAttribute("src", spock);
            break;

        default:
            break;
    }
}