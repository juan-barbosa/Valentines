var mensajes = ["Oh my bad, maybe 'Yes' is too small.. Fixed :3", "Huh?.. 🤨", "No problem, you've got another chance!", "Maybe wanna change your mind??", "Seriously? 5 times?", "Good thing you can think it again", "Very funny :3", "Running out of messages!", "If you got here let me tell you, you are absolutely gorgeous :3", "I think the 'YES' button is big enough now??", "Messages will just repeat after this one :((("]; // Define aquí tus mensajes en el orden deseado
var mensajeIndex = 0;
document.getElementById("but-yes").addEventListener("click", function() {
    mostrarRespuesta();
    enviarRespuesta("Yes");
});

document.getElementById("but-no").addEventListener("click", function() {
    mostrarMensaje();
    aumentarTamanioBoton();
    enviarRespuesta("No");
});

function enviarRespuesta(respuesta) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/invitacion", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
        }
    };
    xhr.send("respuesta=" + respuesta);
}

function mostrarMensaje() {
    var randomRotation = Math.random() * 90 - 45; // Rotación aleatoria entre -45 y 45 grados

    var mensajeContainer = document.getElementById("mensajeContainer");
    var nuevoMensaje = document.createElement("div");
    nuevoMensaje.innerText = mensajes[mensajeIndex];
    nuevoMensaje.style.position = "absolute";
    nuevoMensaje.style.left = Math.random() * (window.innerWidth - 200) + "px";
    nuevoMensaje.style.top = Math.random() * (window.innerHeight - 50) + "px";
    nuevoMensaje.style.transform = "rotate(" + randomRotation + "deg)";
    nuevoMensaje.style.zIndex = 5;
    mensajeContainer.appendChild(nuevoMensaje);

    mensajeIndex = (mensajeIndex + 1) % mensajes.length; // Avanza al siguiente mensaje en orden
}

function mostrarRespuesta() {
    document.getElementById("mensajeContainer").style.display = "none"; // Oculta el contenedor de mensajes
    document.getElementById("but-cont-q").style.display="none";
    document.getElementById("pregunta-1").style.display="none";
    document.getElementById("xd").style.display="none";
    document.getElementById("respuestaContainer").style.display = "block";
    document.getElementById("respuestaContainer").style.color = "brown";
    document.getElementById("respuestaContainer").style.top = "-10%"; // Muestra el contenedor de respuesta
    
}
function aumentarTamanioBoton() {
    var botonYes = document.getElementById("but-yes");
    var estilo = window.getComputedStyle(botonYes);
    var tamanioActual = parseInt(estilo.getPropertyValue("font-size"));
    botonYes.style.fontSize = (tamanioActual + 20) + "px";
    var tamanioacctual = parseInt(estilo.getPropertyValue("padding"));
    botonYes.style.padding = (tamanioacctual + 20) + "px";
    
}