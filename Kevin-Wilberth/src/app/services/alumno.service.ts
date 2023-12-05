import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlumnoModel } from '../models/alumno.model';

import {map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AlumnoService {

  private url = 'https://instituto-56503-default-rtdb.firebaseio.com';

  constructor(private http: HttpClient,
    ) { }

  crearAlumno(alumno: AlumnoModel) {

    return this.http.post(`${this.url}/alumno.json`, alumno)
      .pipe(
        map((resp: any) => {
          alumno.id = resp.name;
          return alumno;
        })
      );
  }

  actualizarAlumno( alumno: AlumnoModel ) {

    function calcularPromedio() {
      const cal1 = parseFloat((document.getElementById('cal1') as HTMLInputElement).value);
      const cal2 = parseFloat((document.getElementById('cal2') as HTMLInputElement).value);
      const cal3 = parseFloat((document.getElementById('cal3') as HTMLInputElement).value);

      // Calcular el promedio
      const promedio = (cal1 + cal2 + cal3) / 3;

      let estado = "";

      if (promedio >= 6 && promedio <= 10){
        estado = "Aprobado"
      } else {
        estado = "Reprobado"
      }


      (document.getElementById('promedio') as HTMLInputElement).value = promedio.toFixed(2);
      return estado;
    }

      const calcularButton = document.getElementById('calPromedio');
      if (calcularButton) {
        calcularButton.addEventListener('click', calcularPromedio);
      }

      calcularPromedio();
      alumno.aprobado_reprobado = calcularPromedio()



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
