import { NgModule } from '@angular/core';
import { IvlistComponent } from './ivlist/ivlist';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { PartidosComponent } from './partidos/partidos';
import { NominaComponent } from './nomina/nomina';

@NgModule({
  declarations: [
    IvlistComponent,
    PartidosComponent,
    NominaComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    IvlistComponent,
    PartidosComponent,
    NominaComponent]
})
export class ComponentsModule { }
