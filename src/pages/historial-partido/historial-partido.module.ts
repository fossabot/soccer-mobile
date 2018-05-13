import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistorialPartidoPage } from './historial-partido';

@NgModule({
  declarations: [
    HistorialPartidoPage,
  ],
  imports: [
    IonicPageModule.forChild(HistorialPartidoPage),
  ],
})
export class HistorialPartidoPageModule {}
