import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HandlerProvider } from '../../providers/handler/handler';
import { BifrostProvider } from '../../providers/bifrost/bifrost';
import { HomePage } from '../home/home';
import { HummerProvider } from '../../providers/hummer/hummer';
import { RegistroPage } from '../registro/registro'
import { MenuPage } from '../menu/menu';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  form: FormGroup;
  constructor(
    public hummer: HummerProvider,
    public bifrost: BifrostProvider,
    public handler: HandlerProvider,
    public formBuilder: FormBuilder,
    public navCtrl: NavController,
    public navParams: NavParams) {

    this.form = this.formBuilder.group({
      correo: ['', Validators.compose([Validators.required, Validators.email])],
      pass: ['', Validators.compose([Validators.required])]
    });
  }

  public iniciarSesion() {
    if (!this.form.valid)
      return this.handler.there('Formulario invalido, verifica que sea un correo');

    this.hummer.loading(true);

    let body = {
      correo: this.form.value.correo,
      contrasena: this.form.value.pass
    }

    this.bifrost.search('jugador', body)
      .then(response =>
        !response.length ?
          this.failLogin() :
          this.successLogin(response[0])
      )
      .catch((err) => this.handler.there(err));
  }

  private successLogin(jugador: object) {
    localStorage.setItem('yo', JSON.stringify(jugador))
    this.handler.there('⚽ Ingreso satisfactorio')
    setTimeout(() => {
      this.hummer.loading(false);
      this.navCtrl.push(MenuPage,jugador);
    }, 1500);
  }

  private failLogin() {
    this.hummer.loading(false);
    this.handler.there('🚨 Credenciales incorrectas');
  }


  public gotoCrearCuenta() {
    this.navCtrl.push(RegistroPage,this.form.value);
  }
}
