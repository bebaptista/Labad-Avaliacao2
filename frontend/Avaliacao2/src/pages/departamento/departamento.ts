import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Funcionario } from '../../models/funcionario';
import { Api } from '../../providers'

/**
 * Generated class for the DepartamentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-departamento',
  templateUrl: 'departamento.html',
})

export class DepartamentoPage {

  currentFuncionarios: Funcionario[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: Api) {
    this.api.getFuncionarios("departamentos/"+this.navParams.get('idDepartamento')+"/funcionarios").subscribe(response => {
      this.currentFuncionarios = response;
      console.log(this.currentFuncionarios);
  },
  error => {
      // TODO tratar erros
      console.log(error);
  });
  }

  getFuncionarios($event){

  }

  funcionarioSelected(idFuncionario: number){
    this.navCtrl.push('FuncionarioPage', {
      idDepartamento: this.navParams.get('idDepartamento'),
      idFuncionario: idFuncionario 
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DepartamentoPage');
  }

}
