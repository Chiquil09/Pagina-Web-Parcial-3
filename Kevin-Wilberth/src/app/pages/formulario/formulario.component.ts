import { Component } from '@angular/core';
import { AlumnoModel } from 'src/app/models/alumno.model';
import { NgForm } from '@angular/forms';
import { AlumnoService } from '../../services/alumno.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  alumno = new AlumnoModel();

  constructor(private alumnoService: AlumnoService,
  private route: ActivatedRoute ) { }


  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');

    if (id !== 'nuevo') {

      this.alumnoService.getObtenerAlumno( id )
      .subscribe((resp:any)=>{
        this.alumno = resp;
        this.alumno.id;
      });
    }

  }


  guardar(form: NgForm) {

    if (form.invalid) {
      console.log(form);
      console.log(this.alumno);
      console.log('Formulario no valido');
      return;
    }

    if (this.alumno.id) {
      this.alumnoService.actualizarAlumno(this.alumno)
        .subscribe(resp => {
          console.log(resp);
          this.mostrarAlerta('¡Alumno actualizado!', 'success');
        });

    } else {
      this.alumnoService.crearAlumno(this.alumno)
        .subscribe(resp => {
          console.log(resp);
          this.mostrarAlerta('¡Alumno creado!', 'success');
        });

      // form.resetForm();
    }
  }

  private mostrarAlerta(mensaje: string, tipo: 'success' | 'error' | 'warning' | 'info' | 'question'): void {
    Swal.fire({
      title: mensaje,
      icon: tipo,
      allowOutsideClick: false,
      confirmButtonText: 'OK'
    });
  }
}
