var gate=0;
import { crearUsuario } from "./usuarios.js";

function menu() {
    while (gate==0) {
        var option = prompt("1. Crear usuario\n2. Ver usuarios\n3. Eliminar usuario\n4. Salir");
        switch (option) {
            case "1":
                crearUsuario();
                break;
            case "2":
        }
    }
}
