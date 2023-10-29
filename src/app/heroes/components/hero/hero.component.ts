import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;
  public nombreVisible: boolean = true;
  public ageVisible: boolean = true;

  get capitalizedName(): string {

    return this.name.toLocaleUpperCase();
  }

  get heroDescription() : string {
    return `${this.name} - ${this.age}`;
  }

  changeHero() : void  {
    this.name = 'Hulk';
    this.nombreVisible = false;
  }

  changeAge(): void {
    this.age = 50;
    this.ageVisible = false;
  }



}
