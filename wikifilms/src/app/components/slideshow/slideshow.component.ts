import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Film } from 'src/app/interfaces/PosterResult';
import Swiper, {Navigation} from 'swiper';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterViewInit{

  //Para recibir datos del componente padre (home) a nuestro Slideshow tenemos que definirlo en inputs
  @Input() films: Film[]=[];
  
  public slideSwiper?: Swiper;
  constructor() { }

  //Inicializacion
  

  ngAfterViewInit(): void {
    this.slideSwiper = new Swiper('.swiper', {
      
      // Optional parameters
      loop: true,
       // Navigation arrows
      });
  }

  ngOnInit(): void {
    console.log(this.films);
  }

  //Funciones para Controles de navegación

  goSlidePrev(){
    this.slideSwiper!.slidePrev();
  }
   
  goSlideNext(){
    this.slideSwiper!.slideNext();
  }

}
