import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/interfaces/PosterResult';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public films: Film[] = [];

//Para inyectar el servicio hacemos uso del constructor
  constructor( private filmsService: FilmsService ) { }
  ngOnInit(): void {
    this.filmsService.getPoster()
      .subscribe(res => {
       // console.log(res.results);
        this.films = res.results;
      })
  }
}
