import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PerfilEquipoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil-equipo',
  templateUrl: 'perfil-equipo.html',
})
export class PerfilEquipoPage {

  public equipo: Object;
  public edit: boolean = false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
    console.log(navParams.data);
    this.equipo = this.navParams.data;

  }

}
