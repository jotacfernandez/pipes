import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cast, CastingResultado } from 'src/app/interfaces/CastResult';
import { FilminfoResultado } from 'src/app/interfaces/filminfoResult';
import { FilmsService } from 'src/app/services/films.service';
import {  } from 'src/app/interfaces/filminfoResult';


@Component({
  selector: 'app-filminfo',
  templateUrl: './filminfo.component.html',
  styleUrls: ['./filminfo.component.css']
})
export class FilminfoComponent implements OnInit {
  
  //Para poder obtener los datos en el html de este componente crearemos estas variable publica
  public filminfo!: FilminfoResultado;//Detalles de la pelicula
  public castinfo!: Cast[]; //Datos del casting
  public crewinfo!: Cast[]; //Datos del equipo: Director, realizador, etc
  
  

  constructor(private activatedRoute: ActivatedRoute,
    private filmsService: FilmsService,
    private router: Router) { }

  ngOnInit(): void {
    
    const id = this.activatedRoute.snapshot.params['id'];

    this.filmsService.getFilminfo(id).subscribe( film => {
      //console.log(film);
      (film && film.id === +id) 
      ? (this.filminfo = film)
      : this.router.navigateByUrl('/home');
      
    });
    console.log(id);

    this.filmsService.getCastinfo(id).subscribe( cast => {
      console.log(cast);
    });

    this.filmsService.getCrewinfo(id).subscribe( crew => {
      console.log(crew);
    });
  }
}