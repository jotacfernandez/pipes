import { Component, Input, OnInit } from '@angular/core';
import { Film } from 'src/app/interfaces/PosterResult';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {

  //Para recibir datos del componente padre (home) tenemos que definirlo en inputs
  @Input() films: Film[]=[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.films);
  }

}
