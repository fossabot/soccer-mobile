import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HummerProvider } from '../../providers/hummer/hummer';
import { BifrostProvider } from '../../providers/bifrost/bifrost';
import { HandlerProvider } from '../../providers/handler/handler';
import { HomePage } from '../home/home';
import { MenuPage } from '../menu/menu';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  form: FormGroup;
  constructor(
    public hummer: HummerProvider,
    public bifrost: BifrostProvider,
    public handler: HandlerProvider,
    public formBuilder: FormBuilder,
    public navCtrl: NavController,
    public navParams: NavParams) {

    this.form = this.formBuilder.group({
      nombre: ['', Validators.compose([Validators.required])],
      apellido: ['', Validators.compose([Validators.required])],
      correo: [navParams.get('correo'), Validators.compose([Validators.required, Validators.email])],
      pass: [navParams.get('pass'), Validators.compose([Validators.required])],
      pass2: ['', Validators.compose([Validators.required])]
    });
  }

  crearCuenta() {
    if (!this.form.valid)
      return this.handler.there('Formulario invalido, verifica que los campos sean correctos.');
    else if (!this.form.value.pass === this.form.value.pass2)
      return this.handler.there('Formulario invalido, verifica que ambas contraseñas coincidan.');

    let body = {
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      correo: this.form.value.correo,
      contrasena: this.form.value.pass,
    }
    this.hummer.loading(true);
    this.bifrost.add('jugador', body)
      .then(response=> {
        response ? this.successRegistro(response) : this.failRegistro(response);
      })
      .catch(err=>this.handler.there(err));
  }

  private successRegistro(jugador: object) {
    localStorage.setItem('yo', JSON.stringify(jugador))
    this.handler.there('⚽ Registro satisfactorio')
    setTimeout(() => {
      this.hummer.loading(false);
      this.navCtrl.push(MenuPage,jugador);
    }, 1500);
  }

  failRegistro(err){
    console.log(err);
  }

  goToLogin() {
    this.navCtrl.push(LoginPage);
  }

}
