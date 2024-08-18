const clientes = [
    {
        id: 1,
        name: "Cesar",
        saldo: 30000000,
        contra: "123456"
    },
    {
        id: 2,
        name: "Camila",
        saldo:200000,
        contra: "123456"
    },
    {
        id: 3,
        name: "Carlos",
        saldo: 530402,
        contra: "123456"
    },
    {
        id: 4,
        name: "Benjamin",
        saldo: 43578439,
        contra: "123456"
    }

];

let opcion;
alert("Bienvenido a Banca en Línea");

let validador = prompt("Ingresa tu usuario:");
let usuarioEncontrado = clientes.find(cliente => cliente.name === validador);

if (usuarioEncontrado) {
  let contrasena = prompt("Ingresa tu contraseña:");
  if (usuarioEncontrado.contra === contrasena) {
    do{
        alert("Bienvenido " + usuarioEncontrado.name);
            opcion = prompt("Seleccione que desea hacer\n" +
                "1. Ver Saldo\n" +
                "2. Realizar Giro\n" +
                "3. Realizar Deposito\n" +
                "4. Salir"
            );
            switch (opcion) {
                case "1":
                    alert("Tu saldo es de: "+usuarioEncontrado.saldo);
                    break;
                case "2":
                    let giro = prompt("Cuanto desea girar?");
                    if (giro <= usuarioEncontrado.saldo) {
                        alert("Tu saldo actual es de: "+(usuarioEncontrado.saldo-giro));
                        usuarioEncontrado.saldo = usuarioEncontrado.saldo-giro;
                    } else {
                        alert("Saldo insuficiente");
                    }
                    break;
                case"3":
                       let destinatario = prompt("Ingresa el nombre del destinatario:");
                       let destinatarioEncontrado = clientes.find(cliente => cliente.name.toLowerCase() === destinatario.toLowerCase());
                
                       if (destinatarioEncontrado) {
                         let monto = parseFloat(prompt("Ingrese el monto a depositar:"));
                         if (monto > 0) {
                           usuarioEncontrado.saldo -= monto; // Resta al usuario que realiza el depósito
                           destinatarioEncontrado.saldo += monto; // Suma al destinatario
                           alert("Depósito realizado exitosamente. Tu nuevo saldo es: " + usuarioEncontrado.saldo);
                         } else {
                           alert("Monto inválido.");
                         }
                       } else {
                         alert("Destinatario no encontrado.");
                       }
                       break;
                case "4":
                    alert("Hasta pronto");
                    break;
            }
    } while (opcion !== "4");
  } else {
      alert("Contraseña incorrecta");
  }
} else {
    alert("Usuario no encontrado.");
}