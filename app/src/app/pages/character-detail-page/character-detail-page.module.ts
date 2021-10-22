import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterDetailPageRoutingModule } from './character-detail-page-routing.module';
import { CharacterDetailPageComponent } from './components/character-detail-page/character-detail-page.component';


@NgModule({
  declarations: [
    CharacterDetailPageComponent
  ],
  imports: [
    CommonModule,
    CharacterDetailPageRoutingModule,
  ]
})
export class CharacterDetailPageModule { }
