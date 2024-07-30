import { Component } from '@angular/core';
import { DatosService } from '../datos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-habilidades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './habilidades.component.html',
  styleUrl: './habilidades.component.css'
})

export class HabilidadesComponent {
  constructor(public DatosService: DatosService) { }
  objectKeys = Object.keys;

  intentos = 2;

  cambioHabilidad(operacion: string, habilidad: string) {

    if (operacion == "restar") {
      if (this.DatosService.personaje.puntosHabilidades >= 2 && this.DatosService.personaje[habilidad] >= 2) {
        this.DatosService.personaje[habilidad] -= 1;

        this.DatosService.personaje.puntosHabilidades += 1;
        this.intentos = 2; // Reinicializa intentos a 2 cada vez que se resta un punto
        console.log(this.intentos);
      }
      else if (this.DatosService.personaje[habilidad] <= 1 && this.intentos >= 1) {
        this.intentos -= 1;
      }
      else if (this.DatosService.personaje.puntosHabilidades <= 1 && this.intentos >= 1) {
        this.intentos -= 1;
      }
      else {
        window.alert("La habilidad mínima es 1");
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
          window.alert("Máximo 6 puntos por habilidad");
        }
      } else if (this.DatosService.personaje.puntosHabilidades <= 0) {
        if (this.intentos > 0) {
          this.intentos -= 1;
        } else {
          window.alert("No te quedan puntos para repartir tontito");
        }
      }
    }
    else { window.alert("Error! algo falla") }
  }

  recibirDanio(event: MouseEvent, lugar: string) {
    if (this.DatosService.personaje[lugar]>= 0) {
      if (event.button == 2) {
        event.preventDefault();
        this.DatosService.personaje[lugar] += 0.1;
      }
      else if (event.button === 0) {
        this.DatosService.personaje[lugar] -= 0.1;
      }
    }
    else {this.DatosService.personaje[lugar] = 1}
  }

}
