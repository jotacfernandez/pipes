import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PosterResultado } from '../interfaces/PosterResult';
  




@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor( private http: HttpClient) { }

  getPoster():Observable<PosterResultado> {
    return this.http.get<PosterResultado>('https://api.themoviedb.org/3/movie/now_playing?api_key=99cd84992241f8b27486288ae4bfe53c&language=es-ES&page=1');
  }


}
