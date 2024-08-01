import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importar FormsModule para usar ngModel
import { DatosService } from '../datos.service';


@Component({
  selector: 'app-crear-contrasenia',
  standalone: true,
  imports: [
    FormsModule,],
  templateUrl: './crear-contrasenia.component.html',
  styleUrl: './crear-contrasenia.component.css'
})
export class CrearContraseniaComponent {
  constructor(public DatosService: DatosService) { }


  guardar() {
    var coincide = false;

    for (var i = 0; i <= this.DatosService.usuariosGuardados.length; i++) {
      if (this.DatosService.usuarioActual == this.DatosService.usuariosGuardados[i]) {
        coincide = true;
      }
    }

    if (coincide == false) {
      if (this.DatosService.usuarioContrasenia == this.DatosService.repetirContrasenia) {
        this.DatosService.usuariosGuardados.push(this.DatosService.usuarioActual); 
        this.DatosService.guardar()
      }
      else {
        window.alert("la contraseña no coincide")
      }
    }
    else { window.alert("El usuario ya existe.") }
  }
}
