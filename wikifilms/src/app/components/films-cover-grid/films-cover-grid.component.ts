import { Component, OnInit, Input } from '@angular/core';
import { Film } from 'src/app/interfaces/PosterResult';

@Component({
  selector: 'app-films-cover-grid',
  templateUrl: './films-cover-grid.component.html',
  styleUrls: ['./films-cover-grid.component.css']
})

export class FilmsCoverGridComponent implements OnInit {

  //Para recibir datos del componente padre (home) a nuestro Slideshow tenemos que definirlo en inputs
  @Input() films: Film[]=[];

  constructor() { }
  

  ngOnInit(): void {
    console.log(this.films);
  }

}
