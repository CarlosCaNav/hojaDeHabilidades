import { Injectable } from '@angular/core';
import { Personaje } from './personajesInterface';
import { useAnimation } from '@angular/animations';
/* import { formatDate } from '@angular/common'; */

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  keyAdmin: string = "Carlos";

  usuariosGuardados: Array<string> = [];
  usuarioActual: string = "";

  accionContrasenia: string = ""; //cargar o borrar
  usuarioAcceder: string = "";
  usuarioContrasenia = "";
  repetirContrasenia = "";

  fechaDeGuardado: string = "No hay archivo de guardado.";

  mostrarBotones: boolean = true;
  emergente: string = "";
  textoAlerta: string = "Holi caracoli!";

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

    contrasenia: "",
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
    if (this.usuarioActual == "") {
      if (this.personaje.puntosHabilidades >= 1) {
        this.emergente = "alerta";
        this.textoAlerta = "hey! que te quedan puntos para repartir.";

        this.emergente = "alerta";
        this.textoAlerta = "hey! que te quedan puntos para repartir."
      }
      /* 
          else if (localStorage.getItem(this.usuarioActual) != null) {
      
            if (confirm('Ya existe un archivo de guardado ¿Seguro que desea sobrescribirlo?')) {
              this.guardando();
            }
          } */

      else { this.emergente = "crearUsuario" }
    }
    else { this.guardando() }
  }

  guardarUsuario() {
    if (this.usuarioContrasenia === this.repetirContrasenia) {
      this.guardando();
    }
    else {
      this.emergente = "alerta";
      this.textoAlerta = "Las contraseñas no coinciden"
    }
  }

  guardando() {
    if (this.emergente != "") {
      this.personaje.contrasenia = this.usuarioContrasenia;
      this.usuarioContrasenia = "";
      this.repetirContrasenia = "";
    }

    const usuarioJSON = JSON.stringify(this.personaje);
    const fecha = new Date().toUTCString();
    const usuariosGuardados = this.usuariosGuardados.join();/* 
    const usuariosGuardados= this.usuariosGuardados.join(', '); */

    this.mostrarBotones = false;
    localStorage.setItem(this.usuarioActual, usuarioJSON);
    localStorage.setItem('fechaGuardado', fecha);
    localStorage.setItem('usuariosGuardados', usuariosGuardados);


    this.cargandoInicio();
    this.emergente = "";


    /* 
    localStorage.setItem('fecha', fecha.toDateString()); */

    /* 
      this.fechaDeGuardado = fecha.getDay().toString() + fecha.getMonth().toString() */
    /* 
        localStorage.setItem('fechadeGuardado', fecha) */

    console.log(fecha);

  }


  cargar() {
    if (this.personaje.puntosHabilidades <= 12) {
      if (confirm("¿Estás seguro que quieres cargar el archivo guardado? Los datos no guardados se perderán.")) {
        this.emergente = "usuarios";
      }
    }
    else { this.emergente = "usuarios"; }


    /* 
        if (localStorage.getItem(this.usuarioActual) != null) {
          if (this.personaje.puntosHabilidades <= 12) {
            if (confirm("¿Estás seguro que quieres cargar el archivo guardado? Los datos no guardados se perderán.")) {
              this.cargandoUsuario()
            }
          }
          else { this.cargandoUsuario() }
    
        }
        else { this.emergente="alerta";
this.textoAlerta="No hay archivo guardado.") } */
  }
  cargandoInicio() {
    const fechaDeGuardado = localStorage.getItem('fechaGuardado');
    const usuarios: string | null = localStorage.getItem('usuariosGuardados');

    if (fechaDeGuardado) { //no entiendo muy bien por qué es necesario esto
      this.fechaDeGuardado = fechaDeGuardado;
    }
    if (usuarios) { // entiendo que se usa, para evitar que haya un valor vacío
      this.usuariosGuardados = usuarios.split(',');
    }
  }

  cargarAcceso(nombre: string) {
    this.usuarioAcceder = nombre;
    this.emergente = "ponerContrasenia"
    this.accionContrasenia = "cargar";
  }

  cargandoUsuario() {

    this.usuarioActual = this.usuarioAcceder;

    const usuarioJSON = localStorage.getItem(this.usuarioActual);

    if (usuarioJSON) {
      const personajeSinAutentificar = JSON.parse(usuarioJSON);

      if (personajeSinAutentificar.contrasenia == this.usuarioContrasenia) {
        if (usuarioJSON) {
          this.personaje = JSON.parse(usuarioJSON);
          this.mostrarBotones = false;
          this.emergente = "";
        }
      }
      else {
        this.emergente = "alerta";
        this.textoAlerta = "La contraseña no es correcta"
      }
    }
  }

  cancelar() { this.emergente = "" }

  borrarUsuario(nombre: string) {
    this.usuarioAcceder = nombre;
    this.emergente = "ponerContrasenia"
    this.accionContrasenia = "borrar";
  }
  borrandoUsuario() {

    const usuarioJSON = localStorage.getItem(this.usuarioAcceder);

    if (usuarioJSON) {
      const personajeSinAutentificar = JSON.parse(usuarioJSON);

      if (personajeSinAutentificar.contrasenia == this.usuarioContrasenia) {
        if (usuarioJSON) {
          localStorage.removeItem(this.usuarioAcceder);
          this.usuariosGuardados = this.usuariosGuardados.filter(usuario => usuario !== this.usuarioAcceder);
          const usuariosGuardados = this.usuariosGuardados.join();
          localStorage.setItem('usuariosGuardados', usuariosGuardados);

          this.nuevo();
        }
        else {
          this.emergente = "alerta";
          this.textoAlerta = "Algo falla... ¿falta el usuario?. Ponte en contacto con el desarrollador"
        }
      }
      else {
        this.emergente = "alerta";
        this.textoAlerta = "La contraseña no es correcta"
      }
    }
    else {
      this.emergente = "alerta";
      this.textoAlerta = "Algo falla... falta el usuario. Ponte en contacto con el desarrollador"
    }
  }

  borrarTodo() {
    if (confirm('¿Estás seguro de que deseas eliminar todos los datos almacenados?')) {
      localStorage.clear();
      this.nuevo()
      this.emergente = "alerta";
      this.textoAlerta = 'Todos los datos han sido eliminados.';
    }
    this.fechaDeGuardado = "No hay archivo de guardado."
  }

  nuevo() {
    this.usuarioAcceder = "";
    this.usuarioActual = "";
    this.emergente = ""
    this.accionContrasenia = "";
    this.mostrarBotones = true;
    this.cargandoInicio();
  }
}
