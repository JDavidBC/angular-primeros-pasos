import { Component } from "@angular/core";





@Component({
  selector: 'app-counter',
  template:`
    <h3>Counter : {{ counter }}</h3>
    <hr>
    <button (click)="increasyBy(1)">+1</button>
    <button (click)="resetToDefault()">Reset</button>
    <button (click)="decreaseBy(1)">-1</button>

  `
})
export class CounterComponent {

  public counter : number = 10;


  increasyBy(value : number): void {

    this.counter += value;

  }

  resetToDefault() : void {
    this.counter = 10;
  }

  decreaseBy(value : number): void {

    this.counter -=value;

  }

}
