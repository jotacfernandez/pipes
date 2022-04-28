import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { PosterResultado } from '../interfaces/PosterResult';
  




@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  
  private pagina= 1;
  private baseUrl: string = 'https://api.themoviedb.org/3';
  
  //Para evitar la llamadas innecesarias a la API, controlaremos si ya se ha llamado a la misma
  //comprobando si la página actual ha sido ya cargada
  public loaded: boolean = true;

  constructor( private http: HttpClient) { }

  //Esta función get retornará el sufijo de la Url de consulta de la API
  //Con ello conseguimos simplificar el código así com acceder a la página para incrementarla
  get params(){
    return {
      api_key: '99cd84992241f8b27486288ae4bfe53c',
      language: 'es-ES',
      page: this.pagina.toString()
    }
  }

  //Esta función nos devuelve la Url de la petición e incrementa cada vez que es llamada
  //desde el componente home o el search
  getPoster():Observable<PosterResultado> {
    
    if ( this.loaded){}

    console.log('pagina cargada');
    //Inicializamos a false
    this.loaded = false;
    return this.http.get<PosterResultado>(`${this.baseUrl}/movie/now_playing`, {
      params: this.params
    }).pipe(
      tap(() =>{
        this.pagina++;
        //Cambiamos el estado de loaded cada vez que avancemos una página
        //Significará que ya está cargada
        this.loaded = true;
      })
    )
  }
}
