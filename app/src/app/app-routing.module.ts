import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: `home`, loadChildren: () =>
      import('./pages/home-page/home-page.module').then(m => m.HomePageModule)
  },
  { path: ``, redirectTo: `home`, pathMatch: `full` },
  {
    path: `characters`, loadChildren: () =>
      import('./pages/characters-page/characters-page.module').then(m => m.CharactersPageModule)
  },
  {
    path: `characters/:idCharacter`, loadChildren: () =>
      import('./pages/character-detail-page/character-detail-page.module').then(m => m.CharacterDetailPageModule)
  },
  {
    path: `movies`, loadChildren: () =>
      import('./pages/movies-page/movies-page.module').then(m => m.MoviesPageModule)
  },
  {
    path: `movies/:idMovie`, loadChildren: () =>
      import('./pages/movie-detail-page/movie-detail-page.module').then(m => m.MovieDetailPageModule)
  },
  {
    path: `about`, loadChildren: () =>
      import('./pages/about-page/about-page.module').then(m => m.AboutPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
