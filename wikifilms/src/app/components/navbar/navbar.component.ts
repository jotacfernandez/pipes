import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  searchTitle(txtbusqueda: string){
    console.log(txtbusqueda);
    //Comprobamos si la cadena está o no vacía. //
    //Si no lo está navegará a la sección de resultados de búsqueda
    if (txtbusqueda = ""){
      return;
    }else {
      //Navegamos a la pagina donde se mostraran los resultados de la búsqueda 
      this.router.navigate(['/search', txtbusqueda]);
    }
 }

}
