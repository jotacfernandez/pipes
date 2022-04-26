import { Component } from '@angular/core';
import { FilmsService } from './services/films.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private filmsService: FilmsService) {
    
  }
}
