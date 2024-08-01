import { Injectable } from '@angular/core';
import { Personaje } from './personajesInterface';
import { useAnimation } from '@angular/animations';
/* import { formatDate } from '@angular/common'; */

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  keyAdmin: string = "Carlos";

  usuariosGuardados= [''];
  usuarioActual: string = "";
  usuarioContrasenia = "";
  repetirContrasenia = "";

  fechaDeGuardado: string = "No hay archivo de guardado.";
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
    if (this.personaje.puntosHabilidades >= 1) {
      window.alert("hey! que te quedan puntos para repartir tontito.")
    }

    else if (localStorage.getItem(this.usuarioActual) != null) {

      if (confirm('Ya existe un archivo de guardado ¿Seguro que desea sobrescribirlo?')) {
        this.guardando();
      }
    }

    else { this.guardando() }

  }

  guardando() {
    const usuarioJSON = JSON.stringify(this.personaje);
    const fecha = new Date().toUTCString();
    const usuariosGuardados= this.usuariosGuardados.join(',');

    this.mostrarBotones = false;
    localStorage.setItem(this.usuarioActual, usuarioJSON);
    localStorage.setItem('fechaGuardado', fecha);
    localStorage.setItem('usuarios', usuariosGuardados);

    this.cargandoInicio();

    /* 
    localStorage.setItem('fecha', fecha.toDateString()); */

    /* 
      this.fechaDeGuardado = fecha.getDay().toString() + fecha.getMonth().toString() */
    /* 
        localStorage.setItem('fechadeGuardado', fecha) */

    console.log(fecha);


  }


  cargar() {

    if (localStorage.getItem('usuario') != null) {
      if (this.personaje.puntosHabilidades <= 12) {
        if (confirm("¿Estás seguro que quieres cargar el archivo guardado? Los datos no guardados se perderán.")) {
          this.cargandoUsuario()
        }
      }
      else { this.cargandoUsuario() }

    }
    else { window.alert("No hay archivo guardado.") }
  }

  cargandoUsuario() {
    const usuarioJSON = localStorage.getItem('usuario');


    if (usuarioJSON) {
      this.personaje = JSON.parse(usuarioJSON);
      this.mostrarBotones = false;
    }
  }
  cargandoInicio() {
    const fechaDeGuardado = localStorage.getItem('fechaGuardado');
    const usuarios: string | null = localStorage.getItem('usuarios');

    if (fechaDeGuardado) { //no entiendo muy bien por qué es necesario esto
      this.fechaDeGuardado = fechaDeGuardado;
    }
    if (usuarios) { // entiendo que se usa, para evitar que haya un valor vacío
      this.usuariosGuardados = usuarios.split(', ');
    }
  }


  borrarTodo() {
    if (confirm('¿Estás seguro de que deseas eliminar todos los datos almacenados?')) {
      localStorage.clear();
      window.alert('Todos los datos han sido eliminados.');
    }
    this.fechaDeGuardado = "No hay archivo de guardado."
  }
}
