import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HabilidadesComponent } from "./habilidades/habilidades.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HabilidadesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'PersonajesHabilidades';
}
