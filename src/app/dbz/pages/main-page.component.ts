import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service.ts.service';

@Component({
  selector: 'app-dbz-main-component',
  templateUrl: './main-page.component.html'
})

export class DbzMainComponent {


  constructor(private dbzService : DbzService){}

  get characters(): Character[] {
    return this.dbzService.characters;
  }

  onDeleteCharacter(id: string) : void {
    this.dbzService.onDeleteById(id);
  }

  onAddCharacter(character: Character) : void {
    this.dbzService.onNewCharacter(character);
  }

}

