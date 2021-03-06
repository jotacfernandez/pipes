import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Film } from 'src/app/interfaces/PosterResult';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  
  public filmsCarousel: Film[] = [];
  public films: Film[] = [];
  

  //Decorador para controlar en que momento llegamos al final de la página haciendo scroll
  //Esto será necesario para generar otra a continuación consiguiendo el efecto de scroll infinito
  @HostListener('window:scroll', ['$event'])
  onscroll(){
    const posicion_scroll = document.documentElement.scrollTop;
    const max_scroll = document.documentElement.scrollHeight;
    //Debido al scroll hay un diferencia entre ambas variales que compensaremos en la condición, sumándola a la posición actual
    if (posicion_scroll+990 >= max_scroll) {
      if (!this.filmsService.loaded){
        return;
      }
      //console.log('pagina Superada')
      this.filmsService.getPoster().subscribe( res => {
        //Con push iremos añadiendo cada nueva página de resultados para que se vaya mostrando de manera "infinita"
        this.films.push(...res.results);
      });
    }
  }

//Para inyectar el servicio hacemos uso del constructor
  constructor( private filmsService: FilmsService ) { }

  ngOnInit(): void {
    this.filmsService.getPoster()
      .subscribe(res => {
       // Obtenemos los dos arrays, uno para el grid de carátulas y el otro para el slide o carousel
       this.films = res.results;
       this.filmsCarousel = res.results;
      })
  }
  //Con esto evitaremos que al resgresar a la home el carrusel muestre una película dirente a las de la primera página
  ngOnDestroy(): void {
    this.filmsService.resetPosterPage();
  }
}
