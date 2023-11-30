import { Component } from '@angular/core';
import { AlumnoService } from '../../services/alumno.service';
import { AlumnoModel } from 'src/app/models/alumno.model';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {

  alumnos: AlumnoModel[] = [];

  constructor ( private alumnoService: AlumnoService) {}

  ngOnInit(){
    this.alumnoService.getAlumno()
    .subscribe( resp =>{
      console.log(resp);
      this.alumnos = resp;
    });

  }
}
