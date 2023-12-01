import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlumnoModel } from '../models/alumno.model';

import {map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AlumnoService {

  private url = 'https://instituto-56503-default-rtdb.firebaseio.com';

  constructor(private http: HttpClient) { }

  crearAlumno(alumno: AlumnoModel) {

    return this.http.post(`${this.url}/alumno.json`, alumno)
      .pipe(
        map((resp: any) => {
          alumno.id = resp.name;
          return alumno;
        })
      );
  }

  actualizarHeroe( alumno: AlumnoModel ) {

    const alumnoTemp = {
     ...alumno
    };
    delete alumnoTemp.id;

    return this.http.put(`${this.url}/alumno/${alumno.id}.json`, alumnoTemp);

  }

  borrarAlumno( id: string ){

    return this.http.delete(`${this.url}/alumno/${id}.json`)

  }


  getAlumno( id: string ){

    return this.http.get(`${this.url}/alumno/${id}.json`)

  }

  getAlumnos(){
    return this.http.get(`${this.url}/alumno.json`)
    .pipe(
     map( this.crearArreglo ),
     delay(0)
    );
  }

private crearArreglo( alumnoObj: { [key: string]: AlumnoModel } | any): AlumnoModel[]{

  const alumnos: AlumnoModel[] = [];
  console.log(alumnoObj);

  Object.keys (alumnoObj).forEach( key =>{
    const alumno: AlumnoModel = alumnoObj[key];
    alumno.id = key;

    alumnos.push(alumno);

  });

  if (alumnoObj === null ){ return []; }

  return alumnos;
}

}
