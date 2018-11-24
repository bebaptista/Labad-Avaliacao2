import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Departamento } from '../../models/departamento';
import { Api } from '../../providers';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  currentDepartamentos: Departamento[];

  constructor(public navCtrl: NavController, public api: Api) {
    this.api.getDepartamentos("departamentos").subscribe(response => {
      this.currentDepartamentos = response;
      console.log(this.currentDepartamentos);
  },
  error => {
      // TODO tratar erros
      console.log(error);
  });
  }

  getDepartamentos($event){

  }

  departamentoSelected(id: number){
    this.navCtrl.push('DepartamentoPage', {
      idDepartamento: id
    });
  }

}
