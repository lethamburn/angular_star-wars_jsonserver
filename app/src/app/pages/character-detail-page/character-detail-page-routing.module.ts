import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailPageComponent } from './components/character-detail-page/character-detail-page.component';

const routes: Routes = [
  { path: "", component: CharacterDetailPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterDetailPageRoutingModule { }
