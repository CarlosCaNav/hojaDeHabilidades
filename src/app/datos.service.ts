import { Injectable } from '@angular/core';
import { Personaje } from './personaje';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  fechaDeGuardado = "";
  mostrarBotones: boolean = true;

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
    danioTorso: 1,
    danioPiernaD: 1,
    danioPiernaI: 1,

    saludFisico: 1,
    saludCordura: 1,
  }

  brazoDirecion = '../../src/assest/salud/piernaI.png';

  direcionImagenes = [
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

  guardar() {
    if (localStorage.getItem('usuario') != null) {

      if (confirm('Ya existe un archivo de guardado, ¿seguro que deseas sobrescribirlo?')) {
        this.guardando()
      }
    }

    else { this.guardando() }

  }

  guardando() {
    const usuarioJSON = JSON.stringify(this.personaje);
    const fecha = new Date();

    if (this.personaje.puntosHabilidades <= 0) {
      this.mostrarBotones = false;
      localStorage.setItem('usuario', usuarioJSON);
/* 
  this.fechaDeGuardado = fecha.getDay().toString() + fecha.getMonth().toString() */

  this.fechaDeGuardado = fecha.toDateString()


    }

    else { window.alert("hey! que te quedan puntos para repartir") }


  }

  cargar() {
    const usuarioJSON = localStorage.getItem('usuario');

    if (confirm("¿Estás seguro que quieres cargar el archivo guardado?, los datos no guardados se perderán")) {
      if (usuarioJSON) {
        this.personaje = JSON.parse(usuarioJSON);
        this.mostrarBotones = false;
      }
    }
  }


  borrarTodo() {
    if (confirm('¿Estás seguro de que deseas eliminar todos los datos almacenados?')) {
      localStorage.clear();
      console.log('Todos los datos han sido eliminados de localStorage');
    }
  }
}
