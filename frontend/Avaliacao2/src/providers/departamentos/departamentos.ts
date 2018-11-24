import { Injectable } from '@angular/core';

import { Api } from '../api/api';
import { Departamento } from '../../models/departamento';

@Injectable()
export class Departamentos {

  constructor(public api: Api) { }

  query(params?: any) {
    return this.api.get('/departamentos');
  }

}
