import { Component, OnInit, Input } from '@angular/core';
import { BifrostProvider } from '../../providers/bifrost/bifrost';
import { HandlerProvider } from '../../providers/handler/handler';

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
export class NominaComponent implements OnInit {
  @Input() idEquipo: string;

  public integrantes: Array<any> = [];
  public lider: Object = {};
  constructor(
    public bifrost: BifrostProvider,
    public handler: HandlerProvider
  ) { }

  ngOnInit() {
    this.getJugadores();
  }

  getJugadores() {
    this.bifrost
      .getPopulate('equipo', this.idEquipo, ['integrantes', 'lider'])
      .then(response => {
        this.integrantes = response.integrantes;
        console.log(this.integrantes);
        this.lider = response.lider;
      })
      .catch(error => this.handler.there(error))
  }

  gotoJugador(idJugador:string,event) {
    //Va al perfil del jugador

  }

  openInvitarModal($event){

  }


}
