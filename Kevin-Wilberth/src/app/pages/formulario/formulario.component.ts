import { Component } from '@angular/core';
import { AlumnoModel } from 'src/app/models/alumno.model';
import { NgForm } from '@angular/forms';
import { AlumnoService } from '../../services/alumno.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  alumno = new AlumnoModel();

  constructor(private alumnoService: AlumnoService ) { }

  guardar(form: NgForm) {

    if (form.invalid) {
      console.log(form);
      console.log(this.alumno);
      console.log('Formulario no valido');
      return;
    }
    this.alumnoService.crearAlumno(this.alumno)
    .subscribe(resp => {
      console.log(resp);
    });

  // form.resetForm();
}

}
