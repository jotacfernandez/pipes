import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  //Necesitamos declarar un Router para navegar hasta la pagina search
  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  searchTitle(texto: string){
    console.log("Texto en navbar component: ",texto);
    //Eliminamos los espacios en blanco introducidos con trim
    texto = texto.trim();
   //Comprobamos si la cadena está o no vacía. //
    //Si no lo está navegará a la sección de resultados de búsqueda
    if ( texto.length === 0 ) {
      return;
    }
 
    console.log('buscarPelicula 1:' +texto);
 
    this.router.navigate(['/search', texto]);
 }

}
