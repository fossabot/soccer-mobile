import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerfilJugadorPage } from './perfil-jugador';

@NgModule({
  declarations: [
    PerfilJugadorPage,
  ],
  imports: [
    IonicPageModule.forChild(PerfilJugadorPage),
  ],
})
export class PerfilJugadorPageModule {}
