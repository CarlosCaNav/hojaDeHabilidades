import { Component } from '@angular/core';
import { DatosService } from '../datos.service';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from "../usuarios/usuarios.component";
import { CrearContraseniaComponent } from "../crear-contrasenia/crear-contrasenia.component";
import { PonerContraseniaComponent } from "../poner-contrasenia/poner-contrasenia.component";
import { AlertasComponent } from "../alertas/alertas.component";

@Component({
  selector: 'app-habilidades',
  standalone: true,
  imports: [CommonModule, UsuariosComponent, CrearContraseniaComponent, PonerContraseniaComponent, AlertasComponent],
  templateUrl: './habilidades.component.html',
  styleUrl: './habilidades.component.css'
})

export class HabilidadesComponent {
  constructor(public DatosService: DatosService) {
    this.DatosService.cargandoInicio()
  }
  objectKeys = Object.keys;

  intentos = 2;

  cambioHabilidad(operacion: string, habilidad: string) {

    if (operacion == "restar") {
      if (this.DatosService.personaje[habilidad] >= 2) {
        this.DatosService.personaje[habilidad] -= 1;

        this.DatosService.personaje.puntosHabilidades += 1;
        this.intentos = 2; // Reinicializa intentos a 2 cada vez que se resta un punto
        console.log(this.intentos);
      }
      else if (this.DatosService.personaje[habilidad] <= 1 && this.intentos >= 1) {
        this.intentos -= 1;
      }
      else {
        this.DatosService.emergente = "alerta";
        this.DatosService.textoAlerta = "La habilidad mínima es 1";
      }
    }
    else if (operacion == "sumar") {
      if (this.DatosService.personaje.puntosHabilidades >= 1 && this.DatosService.personaje[habilidad] <= 5) {
        this.DatosService.personaje[habilidad] += 1;
        console.log(habilidad);

        this.DatosService.personaje.puntosHabilidades -= 1;
        this.intentos = 2; // Reinicializa intentos a 2 cada vez que se suma un punto
      } else if (this.DatosService.personaje[habilidad] >= 6) {
        if (this.intentos > 0) {
          this.intentos -= 1;
        } else {
          this.DatosService.emergente = "alerta";
          this.DatosService.textoAlerta = "Máximo 6 puntos por habilidad";
        }
      } else if (this.DatosService.personaje.puntosHabilidades <= 0) {
        if (this.intentos > 0) {
          this.intentos -= 1;
        } else {
          this.DatosService.emergente = "alerta";
          this.DatosService.textoAlerta = "No te quedan puntos para repartir tontito.";
        }
      }
    }
    else { 
      this.DatosService.emergente = "alerta";
      this.DatosService.textoAlerta = "Error! algo falla" }
  }

  recibirDanio(event: MouseEvent, lugar: string) {
    if (this.DatosService.personaje[lugar] >= 0) {
      if (event.button == 2) {
        event.preventDefault();
        this.DatosService.personaje[lugar] += 0.1;
      }
      else if (event.button === 0) {
        this.DatosService.personaje[lugar] -= 0.1;
      }
    }
    else { this.DatosService.personaje[lugar] = 1 }
  }

}
