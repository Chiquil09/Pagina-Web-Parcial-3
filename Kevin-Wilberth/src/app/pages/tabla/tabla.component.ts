import { Component } from '@angular/core';
import { AlumnoModel } from 'src/app/models/alumno.model';
import { AlumnoService } from 'src/app/services/alumno.service';

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

}
