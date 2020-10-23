let lista = document.getElementById("listaTareas");
let tarea = document.getElementById("inputTarea");
function agregarTarea() {
    if (tarea.value != "") {
        let liTarea = document.createElement("li");
        let liTexto = document.createElement("span");
        let papelera = document.createElement("img");
        papelera.src = "./img/trash.svg";
        papelera.className="papelera";
        papelera.addEventListener("click",borrarEstaTarea);
        liTexto.innerHTML = tarea.value;
        liTarea.appendChild(liTexto);
        liTarea.appendChild(papelera);
        lista.appendChild(liTarea);
        tarea.value = "";
    }
    tarea.focus();
}

function borrarEstaTarea(evento) {
    evento.target.parentElement.remove();
}


function gestionarTecla(evento) {
    // console.log(evento);
    if (evento.keyCode == 13) {
        agregarTarea();
    }
}

function borrarTarea() {
    let valorDevuelto = prompt("Escribe el número de tarea que quieres borrar:");
    if(valorDevuelto > 0 && valorDevuelto <= lista.childElementCount ){
        lista.children[valorDevuelto-1].remove();
        // lista.removeChild(lista.children[valorDevuelto-1]);  
    }else{
      alert("Esa tarea no existe!");  
    }
}