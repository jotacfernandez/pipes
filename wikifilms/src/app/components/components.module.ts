import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SlideshowComponent } from './slideshow/slideshow.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SlideshowComponent
  ],
  //Exportación necesaria para poder importar este componente desde el resto de páginas que harán uso de esta barra
  exports: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule //importamos este módulo para poder hacer uso de routerlink en el componente navbar, entre otros
  ]
})
export class ComponentsModule { }
