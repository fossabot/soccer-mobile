import { Component } from '@angular/core';

/**
 * Generated class for the NominaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'nomina',
  templateUrl: 'nomina.html'
})
export class NominaComponent {

  text: string;

  constructor() {
    console.log('Hello NominaComponent Component');
    this.text = 'Hello World';
  }

}
