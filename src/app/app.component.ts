import {Component, OnInit} from '@angular/core';
import {MoviesServiceService} from './movies-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MoviesServiceService]
})
export class AppComponent implements OnInit {
  private service: MoviesServiceService;
  topMovies: any;
  bottomMovies: any;

  constructor(service: MoviesServiceService) {
    this.service = service;
  }

  ngOnInit(): void {
    this.topMovies = this.service.getTopMovies();
    this.bottomMovies = this.service.getBottomMovies();
  }

}
