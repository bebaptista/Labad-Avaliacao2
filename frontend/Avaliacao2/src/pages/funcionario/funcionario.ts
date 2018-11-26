import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Api } from '../../providers'
import { Conta } from '../../models/conta';

/**
 * Generated class for the FuncionarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-funcionario',
  templateUrl: 'funcionario.html',
})
export class FuncionarioPage {

  currentContas: Conta[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: Api) {
    this.api.getContas("departamentos/"+this.navParams.get('idDepartamento')+"/funcionarios/"+this.navParams.get('idFuncionario')+"/contas").subscribe(response => {
      this.currentContas = response;
      console.log(this.currentContas);
  },
  error => {
      // TODO tratar erros
      console.log(error);
  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FuncionarioPage');
  }

}
