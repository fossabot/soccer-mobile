import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';

/*
  Generated class for the HummerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HummerProvider {
  _load: any;
  constructor(
    public loadingCtrl: LoadingController
  ) {
    console.log('Hello HummerProvider Provider');

  }


  loading(start: boolean) {
    if(start){
      this._load = this.loadingCtrl.create({
        content: 'Cargando...',
        spinner: 'dots'
      });
      this._load.present();
    } else if(this._load){

      this._load.dismiss();
      this._load = null;
    }

  }


}
