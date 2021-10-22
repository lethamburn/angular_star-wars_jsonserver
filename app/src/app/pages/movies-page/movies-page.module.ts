import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesPageRoutingModule } from './movies-page-routing.module';
import { MoviesComponent } from './components/movies/movies.component';


@NgModule({
  declarations: [
    MoviesComponent
  ],
  imports: [
    CommonModule,
    MoviesPageRoutingModule
  ]
})
export class MoviesPageModule { }
