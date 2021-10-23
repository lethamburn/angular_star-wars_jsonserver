import { MoviesService } from './../../../movies-page/services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  public movie: any;
  constructor(private route: ActivatedRoute, public moviesService: MoviesService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const idMovie = params.get("idMovie");

      this.moviesService.getMovie(idMovie).subscribe((movieData) => {
        this.movie = movieData;
        console.log("MOVIE", this.movie)
      })
    })
  }

}
