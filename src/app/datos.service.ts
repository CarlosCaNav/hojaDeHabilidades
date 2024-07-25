import { Injectable } from '@angular/core';
import { Personaje } from './personaje';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  borrar: string = "mierda"

  personaje: Personaje = {
    id: 1,
    nombre: "",

    puntosHabilidades: 13,
    puntosSalud: 11,
    Puntosdrenalina: 5,

    fuerza: 1,
    velocidad: 1,
    punteria: 1,
    percepcion: 1,
    destreza: 1,
    discrepcion: 1,

    danioSalud: 1,
    danioCabeza: 1,
    danioBrazoD: 1,
    danioBrazoI: 1,
    danioTronco: 1,
    danioPiernaD: 1,
    danioPiernaI: 1,

    saludFisico: 1,
    saludCordura: 1,
  }

  brazoDirecion = '../../src/assest/salud/piernaI.png';

direcionImagenes =[
  ['danioSalud', 'url(src/assets/salud/brazoD.png)'],
  ['danioBrazoD', 'url(src/assets/salud/brazoI.png)'],
  ['danioBrazoI', 'url(src/assets/salud/cabeza.png)'],
  ['danioTronco', 'url(src/assets/salud/piernaD.png)'],
  ['danioPiernaD', 'url(src/assets/salud/piernaI.png)'],
  ['danioPiernaI', 'url(src/assets/salud/torso.png)'],
  ['rojo', 'url(src/assets/salud/rojo.png)'],
]
  
  constructor() { }
  boton() {

  }

  ponercaca(caca: string) {
    this.borrar = caca
  }

  guardar() {
    localStorage.setItem("holi", this.borrar);
    console.log("está guardao?");

  }
  cargar() {
    this.borrar = String(localStorage.getItem("holi"));
    
  }
}
