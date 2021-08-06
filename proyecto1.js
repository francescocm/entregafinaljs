// Ejemplos clase jQuery

$(function () {
    console.log("Evento READY de jQuery");
});

window.addEventListener("load", () => {
    console.log("Evento LOAD (objeto window)");
});

$("#datosusuario").click(alert("Usando jQuery: perdón por el alert"));
$("#conteinerobjetos").on("click", () => confirm("Estas usando jQuery?"));

// APPEND
$(document).ready(function(){
    $("#subtitulo").append(" - TEXTO INCORPORADO UTILIZANDO: jQuery")
});

/* Listener */
window.onload = function (){
    document.getElementById('miBoton').addEventListener('click',capturar,true);
}

// Listener con jQuery
const miBoton = document.querySelector("#miBoton");
$("#miBoton").on("click", capturar);
$("#miBoton").on("click", function () {
    console.log("Respuesta a click");
});

function capturar(){
    function Persona(gamertag, edad){
        this.gamertag = gamertag;
        this.edad = edad;
    }
    var gamertagCapturar = document.getElementById("gamertag").value;
    var edadCapturar = document.getElementById("edad").value;

    nuevoSujeto = new Persona(gamertagCapturar,edadCapturar);
    console.log(nuevoSujeto)
    agregar();
}


var baseDatos= [];
function agregar(){
    baseDatos.push(nuevoSujeto);
    console.log(baseDatos);
    document.getElementById("tabla").innerHTML += "<tbody><td>"+nuevoSujeto.gamertag+"</td><td>"+nuevoSujeto.edad+"</td></tbody>";
    //Modificador título
    document.getElementById("titulo").innerHTML = ("Bienvenido: " + gamertag.value);
};


//Calculador de promedio y Clasificaciones

function contenido(id) {
    return document.getElementById(id);
}

function calcularProme() {
    var pn = parseInt(contenido("1nota").value);
    var sn = parseInt(contenido("2nota").value);
    var tn = parseInt(contenido("3nota").value);
    var cn = parseInt(contenido("4nota").value);
    var total = (pn + sn + tn + cn)/4;
    contenido("prom").value = total;

    if (total >=9 & total <=10){
        contenido("EQ").value = "Leyenda";
    }
    else if (total >=8 & total <= 9){
        contenido("EQ").value = "Clase Mundial";
    }
    else if (total >=7 & total <= 8){
        contenido("EQ").value = "Profesional";
    }
    else if (total >=6 & total <= 7){
        contenido("EQ").value = "Semi-Profesional";
    }
    else if (total >=4 & total <= 6){
        contenido("EQ").value = "Amateur";
    }
    
    else {
        contenido("EQ").value = "Manco";
    }
}

//JSON y Storage

const clasificaciones = [
    "Manco > 4",
    "Amateur >6",
    "Semi-Profesional > 7",
    "Profesional > 8",
    "Clase Mundial > 9",
    "Leyenda < 9",
]

const guardarLocal = (key, value) => localStorage.setItem(key, value)

guardarLocal("clasificaciones", JSON.stringify(clasificaciones))

// AJAX 
function ajax_get_json(){
    var resultado=document.getElementById("info");/*El id info asignado a la variable resultado*/
    var xmlhttp;
    if(window.XMLHttpRequest) {
         xmlhttp = new XMLHttpRequest();
     }else{/*Si son navegadores antiguos explore 5*/
         xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
     }
     /*onreadystatechange, para procesar la respuesta enviada por el servidor*/
     xmlhttp.onreadystatechange = function() {
          /*xmlhttp.readyState==4&&xmlhttp.status==200, estamos diciendo ha sido finalizada
              y exitosa, entonces debemos obtener la informacion y poder verla en la pantalla*/
             if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
             /*xmlhttp.renposeText, una cadena hacia un objeto de json JSON.parse()*/
                    var datos = JSON.parse(xmlhttp.responseText);
                    /*La información obtenida se está convirtiendo en un objeto de JSON*/
                    console.log(datos);/*Imprimir en consola*/
                    if(resultado.innerHTML == "") {/*Para que no se repite el contenido*/
                             for(var i in datos) {
                                     resultado.innerHTML += i + ": " + datos[i] + "<br/>";
                              }
                    }
              }
        }
        xmlhttp.open("GET", "data.json", true);/*Recibe 3 parametros, el tipo de metodo Get para obtener información, el nombre del documento donde está info, 3 si es true o false para decirle que si es una 
          petición asincrona*/
         xmlhttp.send();/*Muestra*/
   }


