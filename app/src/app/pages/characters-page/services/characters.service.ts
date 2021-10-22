import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private URL: string = "http://localhost:3000/characters"
  constructor(private httpClient: HttpClient) { }

  public getAllCharacters() {
    return this.httpClient.get(this.URL)
  }

  getCharacter = (idCharacter: any) => {
    return this.httpClient.get(
      `http://localhost:3000/characters/${idCharacter}`
    );
  };
}
