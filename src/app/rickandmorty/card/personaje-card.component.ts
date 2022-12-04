import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Result } from '../interfaces/rickyandmorty.interface';
@Component({
  selector: 'app-personajeCard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personaje-card.component.html',
  styleUrls: ['./personaje-card.component.css']
})
export class PersonajeCardComponent {
@Input()  personaje!:Result
}
