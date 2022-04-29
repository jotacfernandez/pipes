import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-filminfo',
  templateUrl: './filminfo.component.html',
  styleUrls: ['./filminfo.component.css']
})
export class FilminfoComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private filmsService: FilmsService) { }

  ngOnInit(): void {
    
    const id = this.activatedRoute.snapshot.params['id'];
    this.filmsService.getFilminfo(id).subscribe( film => {
      console.log(film);
    } )
    console.log(id);
  }
}