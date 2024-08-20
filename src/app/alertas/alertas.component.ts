import { Component } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-alertas',
  standalone: true,
  imports: [],
  templateUrl: './alertas.component.html',
  styleUrl: './alertas.component.css'
})
export class AlertasComponent {
  constructor(public DatosService: DatosService) { }

}
