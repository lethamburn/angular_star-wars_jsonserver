import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/models/shared.models';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  public movies: Movie[] = []
  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getAllMovies().subscribe((data: any) => {
      const apiResults: Movie[] = data;

      const formattedMovies = apiResults.map(({
        id, name, year, poster, crawl, filmMakers
      }) => ({
        id, name, year, poster, crawl, filmMakers
      }));
      this.movies = formattedMovies
    })
  }

}
