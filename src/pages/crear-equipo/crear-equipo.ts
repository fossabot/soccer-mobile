import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BifrostProvider } from '../../providers/bifrost/bifrost';
import { HandlerProvider } from '../../providers/handler/handler';
import { HomePage } from '../home/home';

/**
 * Generated class for the CrearEquipoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crear-equipo',
  templateUrl: 'crear-equipo.html',
})
export class CrearEquipoPage {

  form:FormGroup;
  escudos:Array<string>;
  selectedEscudo:number;
  constructor(
    public handler: HandlerProvider,
    public bifrost: BifrostProvider,
    public formBuilder: FormBuilder,
    public navCtrl: NavController,
    public navParams: NavParams) {

    this.form = this.formBuilder.group({
      nombreEquipo: ['',Validators.compose([Validators.required])],
      categoria: ['',Validators.compose([Validators.required])],
      descripcion: ['',Validators.compose([Validators.required])],
      privado: [false]
    });

    this.escudos = [
      '/assets/imgs/escudo.jpg',
      '/assets/imgs/escudo2.jpg',
      '/assets/imgs/escudo3.png'
    ];

  }
  selectEscudo(index){
    this.selectedEscudo = index;
  }
  crearEquipo(){
    if(this.form.invalid)
      return this.handler.there('Formulario invalido verifica que todos los campos esten llenos');
    let body = {
      nombre: this.form.value.nombreEquipo,
      categoria: this.form.value.categoria,
      descripcion: this.form.value.descripcion,
      foto:this.selectedEscudo,
      privado: this.form.value.privado
    };

    this.bifrost.add('equipo',body)
      .then(response => {
        response ? this.success(response) : this.fail(response);
      })
      .catch(err => this.handler.there(err));
  }

  success(response){
    this.handler.there('Equipo creado satisfactoriamente')
    this.navCtrl.push(HomePage);
  }

  fail(response){
    this.handler.there('Ha ocurrido un error en la creación del equipo, intente más tarde')
    console.log(response);
  }

}

