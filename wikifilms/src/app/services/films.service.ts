import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { PosterResultado } from '../interfaces/PosterResult';
  




@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  private baseUrl: string = 'https://api.themoviedb.org/3';
  private pagina= 1;
  constructor( private http: HttpClient) { }

  get params(){
    return {
      api_key: '99cd84992241f8b27486288ae4bfe53c',
      language: 'es-ES',
      page: this.pagina.toString()
    }
  }

  getPoster():Observable<PosterResultado> {
    return this.http.get<PosterResultado>(`${this.baseUrl}/movie/now_playing`, {
      params: this.params
    }).pipe(
      tap(() =>{
        this.pagina++;
      })
    )
  }
}
