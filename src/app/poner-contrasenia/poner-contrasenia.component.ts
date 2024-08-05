import { Component } from '@angular/core';
import { DatosService } from '../datos.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-poner-contrasenia',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './poner-contrasenia.component.html',
  styleUrl: './poner-contrasenia.component.css'
})
export class PonerContraseniaComponent {
  constructor(public DatosService: DatosService) {}

}
