import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FilminfoComponent } from './filminfo/filminfo.component';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    HomeComponent,
    FilminfoComponent,
    SearchComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
