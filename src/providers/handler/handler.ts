import { Injectable } from '@angular/core';
import { ToastProvider } from '../toast/toast'
import { HummerProvider } from '../hummer/hummer';
/*
  Generated class for the HandlerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HandlerProvider {

  constructor(
    public toast: ToastProvider
  ) {}

  public there(message: string){
    this.toast.show(message);
    return;
  }

}
