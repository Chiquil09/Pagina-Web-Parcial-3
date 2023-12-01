import { Component } from '@angular/core';
import { AlumnoModel } from 'src/app/models/alumno.model';
import { NgForm } from '@angular/forms';
import { AlumnoService } from '../../services/alumno.service';

import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
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

      if( id!== 'nuevo' ) {
        this.alumnoService.getAlumno( id )
        .subscribe( (resp: AlumnoModel ) => {
           this.alumno = resp;
           this.alumno.id = id;
        });
      }


    }

guardar( form: NgForm ) {

  if( form.invalid ) {
    console.log('Formulario no válido');

     return;
    }

    Swal.fire({
      title: 'Espere',
      text: 'Guardando información',
      icon: 'info',
      allowOutsideClick: false
    });

    Swal.showLoading();

    let peticion: Observable<any>;

    if( this.alumno.id ) {
     peticion = this.alumnoService.actualizarHeroe( this.alumno );
    }else {
     peticion = this.alumnoService.crearAlumno( this.alumno );
    }

    peticion.subscribe( resp => {
      Swal.fire({
        title: this.alumno.nombre,
        text: 'Se actualizó correctamente',
        icon: 'success'
      });
    })

}

}
