import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { CastingResultado } from '../interfaces/CastResult';
import { FilminfoResultado } from '../interfaces/filminfoResult';
import { Film, PosterResultado } from '../interfaces/PosterResult';
  




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

  resetPosterPage(){
    this.pagina = 1;
  }
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
    );
  }

  //Esta función será llamada desde el componente search
  //Url de ejemplo para el Get del search Movies de la API:
  //https://api.themoviedb.org/3/search/movie?api_key=99cd84992241f8b27486288ae4bfe53c&language=es-ES&query=vengadores&page=1&include_adult=true
  //Esta función devolverá la url correspondiente que será el parámetro del Get en la pagina search
  searchFilms(texto: string):Observable<Film[]>{
    //Desestructuramos para hacer algunos cambio nacesarios (page y query)
    const params = {...this.params, page:'1', query: texto};
    console.log("params en services ", params);
    return this.http.get<PosterResultado>(`${this.baseUrl}/search/movie`, {
      params: this.params}).pipe(map(res => res.results))
  }
  
  //Esta función será llamada desde el componente filminfo
  //Url ejemplo para el Get details de la API:
  //https://api.themoviedb.org/3/movie/335787?api_key=99cd84992241f8b27486288ae4bfe53c&language=es-ES
  //Como en los casos anteriores, utilizaremos una función que nos devolverá la url necesaria para
  //Dicha url será el parámetro del Get con el que obtendremos,  en la página filminfo, los datos de la pelicula clicada (según su id) 

  getFilminfo(id: string) {
    return this.http.get<FilminfoResultado>(`${this.baseUrl}/movie/${id}`,{
      params:this.params});
  }

  //Url ejemplo para el Get credits de la API:
  //https://api.themoviedb.org/3/movie/414906/credits?api_key=99cd84992241f8b27486288ae4bfe53c&language=es-ES
  getCastinfo(id: string){
    return this.http.get<CastingResultado>(`${this.baseUrl}/movie/${id}/credits`,{
      params:this.params}).pipe(map(res => res.cast));
  }

  //Creamos esta función independiente para obtener datos del crew de la pelicula: director, etc
  getCrewinfo(id: string){
    return this.http.get<CastingResultado>(`${this.baseUrl}/movie/${id}/credits`,{
      params:this.params}).pipe(map(res => res.crew));
  }

}
