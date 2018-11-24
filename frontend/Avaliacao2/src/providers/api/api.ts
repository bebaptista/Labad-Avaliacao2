import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Departamento } from '../../models/departamento';
import { Observable } from 'rxjs/Observable';
import { Funcionario } from '../../models/funcionario';
import { Conta } from '../../models/conta';


/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class Api {
  url: string = 'http://localhost:3000';
  public headers: HttpHeaders;

  constructor(public http: HttpClient) {
  }

  getDepartamentos(endpoint: string): Observable<Departamento[]> {
    return this.http.get<Departamento[]>(this.url + '/' + endpoint);
  }

  getFuncionarios(endpoint: string): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(this.url + '/' + endpoint);
  }


  getContas(endpoint: string): Observable<Conta[]> {
    return this.http.get<Conta[]>(this.url + '/' + endpoint);
  }
}
