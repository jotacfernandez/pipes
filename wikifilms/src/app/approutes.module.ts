import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FilminfoComponent } from './pages/filminfo/filminfo.component';
import { SearchComponent } from './pages/search/search.component';

//AQUI DEFINIREMOS LAS RUTAS DE LAS PÁGINAS DE LA APLICAICIÓN

const rutas_arr: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  
  {
    path: 'filminfo/:id',
    component: FilminfoComponent
  },

  {
    path: 'search/:txtbusqueda:',
    component: SearchComponent
  },
  //En caso de no identificar la página objetivo, volverá al home
  {
    path: '**',
    redirectTo: '/home'
  },

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(rutas_arr)
  ],
  exports:[
    RouterModule
  ]
})
export class ApproutesModule { }
