import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

/*
  Generated class for the ToastProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ToastProvider {

  constructor(public toast: ToastController) {
  }

  show(
    message: string,
    duration: number = 3000,
    position: string ='bottom') {
    let toast = this.toast.create({
      message: message,
      duration: duration,
      position: position
    });

    toast.present();
  }

}
