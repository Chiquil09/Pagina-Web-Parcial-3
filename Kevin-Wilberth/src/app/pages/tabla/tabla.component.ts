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
  alumnosOriginal: any[] = [];

  constructor ( private alumnoService: AlumnoService) {}

  ngOnInit(){
    this.alumnoService.getAlumnos()
    .subscribe( resp =>{
      console.log(resp);
      this.alumnos = resp;
    });

  }

  // Variables para almacenar el estado de los checkboxes
  aprobados: boolean = false;
  reprobados: boolean = false;
  masculino: boolean = false;
  femenino: boolean = false;

  // Método para manejar el filtrado
  filtrarDatos() {
    // Copia la lista original si aún no se ha hecho
    if (!this.alumnosOriginal.length) {
      this.alumnosOriginal = [...this.alumnos];
    }

    // Aplica lógica de filtrado según el estado de los checkboxes
    this.alumnos = this.alumnosOriginal.filter((alumno) => {
      return (
        (this.aprobados && alumno.aprobado_reprobado === 'Aprobado') ||
        (this.reprobados && alumno.aprobado_reprobado === 'Reprobado') ||
        (this.masculino && alumno.sexo === 'Masculino') ||
        (this.femenino && alumno.sexo === 'Femenino')
      );
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
