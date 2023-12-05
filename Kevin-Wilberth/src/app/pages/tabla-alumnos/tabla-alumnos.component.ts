import { Component } from '@angular/core';
import { AlumnoModel } from 'src/app/models/alumno.model';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-tabla-alumnos',
  templateUrl: './tabla-alumnos.component.html',
  styleUrls: ['./tabla-alumnos.component.css']
})
export class TablaAlumnosComponent {

  alumnos: AlumnoModel[] = [];

  constructor ( private alumnoService: AlumnoService) {}

  ngOnInit(){
    this.alumnoService.getAlumnos()
    .subscribe( resp =>{
      console.log(resp);
      this.alumnos = resp;
    });

  }

}
