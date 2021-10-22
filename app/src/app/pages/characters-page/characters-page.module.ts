import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersPageRoutingModule } from './characters-page-routing.module';
import { CharactersComponent } from './components/characters/characters.component';
import { CharactersService } from './services/characters.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CharactersComponent
  ],
  imports: [
    CommonModule,
    CharactersPageRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    CharactersService
  ]
})
export class CharactersPageModule { }
