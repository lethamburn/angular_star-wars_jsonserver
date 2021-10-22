import { CharactersService } from './../../services/characters.service';
import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/shared/models/shared.models';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  public characters: Character[] = [];

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.charactersService.getAllCharacters().subscribe((data: any) => {
      const apiResults: Character[] = data;

      const formattedCharacters = apiResults.map(({ id, name, origin, role, image, family }) => ({
        id, name, origin, role, image, family
      }));
      this.characters = formattedCharacters;
    })
  }

}
