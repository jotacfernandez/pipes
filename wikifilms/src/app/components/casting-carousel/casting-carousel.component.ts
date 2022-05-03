import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Cast } from 'src/app/interfaces/CastResult';
import Swiper from 'swiper';

@Component({
  selector: 'app-casting-carousel',
  templateUrl: './casting-carousel.component.html',
  styleUrls: ['./casting-carousel.component.css']
})
export class CastingCarouselComponent implements OnInit, AfterViewInit {
  
  @Input() cast: Cast[];
  //public mySwiper!: Swiper;
  constructor() { }

  ngOnInit(): void {
    console.log("Casting en Cast-slideshow (casting-Carousel)", this.cast);
  }

  ngAfterViewInit(): void {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 5.3,
      freeMode: true,
      spaceBetween: 15
    });
  }

}
