import { Component } from '@angular/core';

/**
 * Generated class for the PartidosComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'partidos',
  templateUrl: 'partidos.html'
})
export class PartidosComponent {

  text: string;

  constructor() {
    console.log('Hello PartidosComponent Component');
    this.text = 'Hello World';
  }

}
