import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieDetailPageRoutingModule } from './movie-detail-page-routing.module';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';


@NgModule({
  declarations: [
    MovieDetailComponent
  ],
  imports: [
    CommonModule,
    MovieDetailPageRoutingModule
  ]
})
export class MovieDetailPageModule { }
