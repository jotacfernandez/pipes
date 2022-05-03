import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from 'src/app/interfaces/PosterResult';

@Component({
  selector: 'app-films-cover-grid',
  templateUrl: './films-cover-grid.component.html',
  styleUrls: ['./films-cover-grid.component.css']
})

export class FilmsCoverGridComponent implements OnInit {

  //Para recibir datos del componente padre (home) a nuestro Slideshow tenemos que definirlo en inputs
  @Input() films: Film[]=[];

  //Incluimos un Router porque necesitamos navegar hasta la pagina de infromación de la pelicula seleccionada (filminfo)
  constructor(private router: Router) { }
  

  ngOnInit(): void {
    console.log(this.films);
  }

  onFilmClick(film: Film){
    //console.log(film);
    this.router.navigate(['/filminfo', film.id]);
  }

}
