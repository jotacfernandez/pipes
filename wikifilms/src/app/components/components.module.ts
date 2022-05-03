import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { FilmsCoverGridComponent } from './films-cover-grid/films-cover-grid.component';
import { RatingModule } from 'ng-starrating';
import { CastingCarouselComponent } from './casting-carousel/casting-carousel.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SlideshowComponent,
    FilmsCoverGridComponent,
    CastingCarouselComponent
  ],
  //Exportación necesaria para poder importar este componente desde el resto de páginas que harán uso de esta barra
  //Exportaremos aquellos que van a ser usados en las distintas paginas
  exports: [
    NavbarComponent,
    SlideshowComponent,
    FilmsCoverGridComponent,
    CastingCarouselComponent
  ],
  imports: [
    CommonModule,
    RouterModule, //importamos este módulo para poder hacer uso de routerlink en el componente navbar, entre otros
    RatingModule,
  ]
})
export class ComponentsModule { }
