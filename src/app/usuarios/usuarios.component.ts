import { Component } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {
  constructor(public DatosService: DatosService) {}

}
