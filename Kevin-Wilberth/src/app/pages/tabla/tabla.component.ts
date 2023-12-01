import { Component } from '@angular/core';
import { AlumnoModel } from 'src/app/models/alumno.model';
import { AlumnoService } from 'src/app/services/alumno.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {

  alumnos: AlumnoModel[] = [];

  constructor ( private alumnoService: AlumnoService) {}

  ngOnInit(){
    this.alumnoService.getAlumnos()
    .subscribe( resp =>{
      console.log(resp);
      this.alumnos = resp;
    });

  }

  borrarAlumno( alumno: AlumnoModel, i:number ){

    Swal.fire({
      title: '¿Está seguro?',
      text: `Está seguro que desea borrar a ${alumno.nombre}`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then( resp => {

      if( resp.value ){
        this.alumnos.splice(i, 1);
        this.alumnoService.borrarAlumno( alumno.id ).subscribe();
      }

    });


  }

}
