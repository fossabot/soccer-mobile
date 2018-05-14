import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CrearEquipoPage } from '../crear-equipo/crear-equipo';
import { BuscarEquipoPage } from '../buscar-equipo/buscar-equipo';
import { MisPartidosPage } from '../mis-partidos/mis-partidos';
import { PerfilJugadorPage } from '../perfil-jugador/perfil-jugador';



/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 * x
 */

type Yo = {
  nombreCorto,
  nombre,
  apellido,
  correo
};

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  rootPage;
  title: string;
  menu: Array<any>;
  yo: Yo = {
    nombreCorto: '',
    correo: '',
    nombre: '',
    apellido: ''
  };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rootPage = HomePage;
    this.title = 'INICIO';

    this.menu = [{
      page: HomePage,
      title: 'INICIO',
      icon: 'albums'
    },{
      page: CrearEquipoPage,
      title: 'CREAR EQUIPO',
      icon: 'add'
    },{
      page: BuscarEquipoPage,
      title: 'BUSCAR EQUIPO',
      icon: 'search'
    },{
      page: MisPartidosPage,
      title: 'MIS PARTIDOS',
      icon: 'football'
    }];

    this.setnombreCorto();
  }

  setnombreCorto() {
    this.yo = JSON.parse(localStorage.getItem('yo'));

    let nombreCorto: any =(`${this.yo.nombre} ${this.yo.apellido}`).split(' ');

    nombreCorto = `${nombreCorto[0]} ${nombreCorto[nombreCorto.length - 1]}`;
    this.yo = Object.assign(this.yo, { nombreCorto });
  }

  openPage(index) {
    console.log(index);
    this.rootPage = this.menu[index].page;
  }

  gotoProfile() {
    this.rootPage = PerfilJugadorPage;
  }

}
