import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ChatPage } from '../chat/chat';
import { Page } from 'ionic-angular/navigation/nav-util';
import { CrearEquipoPage } from '../crear-equipo/crear-equipo';
import { BuscarEquipoPage } from '../buscar-equipo/buscar-equipo';
import { MisPartidosPage } from '../mis-partidos/mis-partidos';
import { PerfilJugadorPage } from '../perfil-jugador/perfil-jugador';



/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  rootPage;
  title: string;
  pages: Array<Page>;
  yo: object = {
    nombreCorto: 'gh',
    correo: ''
  };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rootPage = HomePage;
    this.title = 'INICIO';

    this.pages = [
      HomePage,
      CrearEquipoPage,
      BuscarEquipoPage,
      MisPartidosPage
    ]
    this.setnombreCorto();
  }

  setnombreCorto() {
    this.yo = JSON.parse(localStorage.getItem('yo'));

    let nombreCorto: any =
      (`${this.yo.nombre} ${this.yo.apellido}`)
        .split(' ');

    nombreCorto =
      nombreCorto.length === 3 ?
        `${nombreCorto[0]} ${nombreCorto[1]}` :
        `${nombreCorto[0]} ${nombreCorto[2]}`;

    this.yo = Object.assign(this.yo, {nombreCorto});
    console.log(this.yo)
  }

  openPage(page) {
    this.rootPage = page;
  }

  gotoProfile() {
    this.rootPage = PerfilJugadorPage;
  }


}
