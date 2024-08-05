import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importar FormsModule para usar ngModel
import { CommonModule } from '@angular/common';
import { DatosService } from '../datos.service';


@Component({
  selector: 'app-crear-contrasenia',
  standalone: true,
  imports: [
    FormsModule, CommonModule],
  templateUrl: './crear-contrasenia.component.html',
  styleUrl: './crear-contrasenia.component.css'
})
export class CrearContraseniaComponent {
  constructor(public DatosService: DatosService) { }


  guardar() {
    var coincide = false;

    /* he descubierto un método que se llama find() para evitarme hacer el bucle 
    o mejor aun .reduce()*/

    for (var i = 0; i <= this.DatosService.usuariosGuardados.length; ++i) {
      console.log("furula?");
      if (this.DatosService.usuariosGuardados[i] === this.DatosService.usuarioActual) {
        coincide = true;
        window.alert("El nombre de usuario ya existe")
        break
      };
    }

    if (coincide == false) {
      if (this.DatosService.usuarioContrasenia === this.DatosService.repetirContrasenia) {
        this.DatosService.usuariosGuardados.push(this.DatosService.usuarioActual); 
        this.DatosService.guardando() 
        console.log("furuló");
      }

      else {
        window.alert("la contraseña no coincide")
      }
    }

  }
}
