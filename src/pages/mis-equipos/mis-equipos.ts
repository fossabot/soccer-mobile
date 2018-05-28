import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PerfilEquipoPage } from '../perfil-equipo/perfil-equipo';

/**
 * Generated class for the MisEquiposPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mis-equipos',
  templateUrl: 'mis-equipos.html',
})
export class MisEquiposPage {

  public filter: Object;
  public map: Object;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.filter = {
      integrantes: JSON.parse(localStorage.getItem('yo'))._id
    }
    this.map = {
      title: 'nombre',
      img: 'foto',
      desc: 'descripcion',
      subtitle: {
        text: 'categoria',
        pretext: 'Categoria'
      }
    };

  }

  gotoEquipo(event) {
    this.navCtrl.push(PerfilEquipoPage, event.data);
  }
}
