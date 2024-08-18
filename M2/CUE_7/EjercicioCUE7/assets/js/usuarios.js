let usuarios = [
  [1,{ nombre: "Juan", password: "123456", rol: "admin" }],
  [2,{ nombre: "Pedro", password: "abcdef", rol: "user" }],
  [3,{ nombre: "Maria", password: "ghijkl", rol: "user" }],
  [4,{ nombre: "Luis", password: "mnopqr", rol: "user" }],
];

class usuarios_crud {
    

 
    static crearUsuario(nombre, password, rol) {
        var usuario = new usuarios (nombre, password, rol);
        console.log (usuario);
    }   

    static verUsuarios() {
      data = '';

      for (i = 0; i < usuarios.length; i++) {

        data = ('(' + i + ') usuario: ' + usuarios[i].nombre + '\n\n') + data;
      }
      if (usuarios.length == 0) {
        alert("No hay usuarios.");
      } else {
        alert('Los usuarios son:\n' + data);
      }
    }

    // Método para obtener un usuario por su nombre
  static obtenerUsuarioPorNombre(nombre) {
    // Aquí puedes agregar lógica adicional para buscar el usuario en una base de datos o en algún otro lugar
    for(usuario in usuarios){
        if (nombre === usuarios[usuario].nombre) {
            return usuarios[usuario];
            alert("Usuario encontrado: " + usuarios[usuario].nombre + "\n"  + "Rol: " + usuarios[usuario].rol);
        }
    }
    
  }

  // Método para actualizar un usuario existente
  static actualizarUsuario(nombre, nuevoNombre, nuevoPassword, nuevoRol) {
    // Aquí puedes agregar lógica adicional para buscar el usuario en una base de datos o en algún otro lugar
    const usuarioActualizado = new Usuarios(nuevoNombre, nuevoPassword, nuevoRol);
    console.log(`Usuario actualizado: ${usuarioActualizado}`);
  }

  // Método para eliminar un usuario
  static eliminarUsuario(nombre) {
    // Aquí puedes agregar lógica adicional para buscar el usuario en una base de datos o en algún otro lugar
    for(usuario in usuarios){
        if (nombre === "admin") {
          console.log("No puedes eliminar al usuario administrador");
          return;
        }else if(nombre === usuarios[usuario].nombre){
            delete usuarios[usuario];
        }

    }
    console.log(`Usuario eliminado: ${nombre}`);
  }
}
