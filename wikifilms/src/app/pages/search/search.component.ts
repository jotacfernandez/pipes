import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmsService } from 'src/app/services/films.service';
import { Film } from 'src/app/interfaces/PosterResult';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  public texto: string = '';
  public films: Film[] = [];
  //Capturamos aqui el valor obtenido via campo de búsqueda en el componente de navbar 
  constructor(private activatedRoute: ActivatedRoute,
              private filmsService: FilmsService ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe ( params =>{
      console.log("params en search ", params['texto']);

      this.texto = params['texto'];

        this.filmsService.searchFilms( params['texto'] ).subscribe(films => {
          this.films = films; })
    })
  }

}
