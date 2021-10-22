import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/pages/characters-page/services/characters.service';

@Component({
  selector: 'app-character-detail-page',
  templateUrl: './character-detail-page.component.html',
  styleUrls: ['./character-detail-page.component.scss']
})
export class CharacterDetailPageComponent implements OnInit {
  public character: any;
  constructor(private route: ActivatedRoute, public charactersService: CharactersService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const idCharacter = params.get('idCharacter');

      this.charactersService
        .getCharacter(idCharacter)
        .subscribe((characterData) => {
          this.character = characterData;
        });
    });
  }

}
