var tareas = [
    { tarea: "Pintar la fachada de la casa" },
    { tarea: "Comprar comida para el perro" },
    { tarea: "Pagar la tarjeta de crédito" }
]

var nuevaTarea = document.getElementById("nuevaTarea");
var agregar = document.getElementById("agregar");
var cuerpoTabla = document.getElementById("cuerpo-tabla");
var tablaTareas = document.getElementById("tabla-tareas");

// Tabla de tareas
function mostrarTareas() {
    cuerpoTabla.innerHTML = "";
    tareas.forEach(function (tarea, index) {
        var nuevaFila = document.createElement("tr");
        nuevaFila.innerHTML = `
            <td>${tarea.tarea}</td>
            <td>
                <button type="button" class="btn btn-danger" onclick="eliminarTarea(${index})">Eliminar</button>
            </td>
        `;
        cuerpoTabla.appendChild(nuevaFila);
    });
}
function formTarea() {
    if (document.getElementById("formulario").style.display == "none") {
        document.getElementById("formulario").style.display = "block";
    } else {    
        ocultarForm();
    }
}
function eliminarTarea(index) {
    tareas.splice(index, 1);
    mostrarTareas();
}
mostrarTareas()

function agregarTarea() {
    let nuevaTarea = document.getElementById("nuevaTarea").value;
    if (nuevaTarea == "") {
        alert("Por favor ingrese una tarea");
        return false;
    }else{
        tareas.push({tarea: nuevaTarea});
        document.getElementById("nuevaTarea").value = "";
        mostrarTareas();
        ocultarForm();
    }
}
function ocultarForm() {
    document.getElementById("formulario").style.display = "none";
}