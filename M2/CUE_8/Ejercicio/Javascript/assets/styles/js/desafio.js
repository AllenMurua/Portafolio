const datos = [
    {
        id: 1,
        name: "Cesar",
        clase: "admin",
        contra: "123456"
    },
    {
        id: 2,
        name: "Camila",
        clase: "admin",
        contra: "123456"
    },
    {
        id: 3,
        name: "Carlos",
        clase: "user",
        contra: "123456"
    },
    {
        id: 4,
        name: "Benjamin",
        clase: "user",
        contra: "123456"
    }

];

let opcion;
do {
    opcion = mostrarMenu();
    switch (opcion) {
        case "1":
            crearUsuario();
            break;
        case "2":
            editarClase();
            break;
        case "3":
            verUsuarios();
            break;
        case "4":
            buscarUsuario();
            break;
        case "5":
            alert("¡Gracias por jugar!");
            break;
        default:
            alert("Opción no válida. Por favor, elige una opción del 1 al 5.");
    }
} while (opcion !== "5");


function mostrarMenu() {
    return prompt(
        "Bienvenido al Juego de Rol\n" +
        "1. Crear Usuario\n" +
        "2. Cambiar clase\n" +
        "3. Ver Usuarios\n" +
        "4. Eliminar Usuario\n" +
        "5. Salir\n" +
        "Elige una opción (1-5):"
    );
}
let usuario = null;

function crearUsuario() {
    let nombre = prompt("Ingresa el nombre de usuario:");
    let clase = prompt("Ingresa la clase:");
    let contra = prompt("Ingresa la contrasena:");
    usuario = { id: datos.length + 1, name: nombre, clase: clase, contra: contra };
    datos.push(usuario);
    alert(`¡${nombre} el ${clase} ha sido creado!`);
}

function editarClase() {
    let name = prompt("Ingresa nombre de usuario:");
    let usuarioEncontrado = datos.find(usu => usu.name === name);
    if (usuarioEncontrado) {
        let nuevaClase = prompt("Ingresa la nueva clase:");
        usuarioEncontrado.tipoUsuario = nuevaClase;
        alert(`¡${name} ahora es ${nuevaClase}!`);
    } else {
        alert("Usuario no encontrado.");
    }
}

function verUsuarios() {

    let tabla = "Nombre | Clase\n";
  datos.forEach(usuario => {
    tabla += `${usuario.name} | ${usuario.clase}\n`;
  });
  alert(tabla);
}

function buscarUsuario() {
    let id = prompt("Ingresa nombre de usuario:");
    alert("El usuario es: "+datos[id].name + " y su clase es: " + datos[id].clase);
    
}

