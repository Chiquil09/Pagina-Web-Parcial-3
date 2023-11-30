import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlumnoModel } from '../models/alumno.model';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private url = 'https://instituto-56503-default-rtdb.firebaseio.com';


  constructor(private http: HttpClient) { }

  crearAlumno( alumno: AlumnoModel ){

    return this.http.post(`${ this.url }/alumno.json`, alumno)
    .pipe(
      map( (resp: any) => {
        alumno.id = resp.name;
        return alumno;
      })
    );

  }
}
