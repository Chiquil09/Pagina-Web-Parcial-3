import { Component } from '@angular/core';
import { AlumnoModel } from 'src/app/models/alumno.model';
import { NgForm } from '@angular/forms';
import { AlumnoService } from '../../services/alumno.service';

import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  alumno = new AlumnoModel();

  constructor(private alumnoService: AlumnoService,
    private route: ActivatedRoute,
    private router: Router ) { }


    ngOnInit() {


      function calcularPromedio() {
        const cal1 = parseFloat((document.getElementById('cal1') as HTMLInputElement).value);
        const cal2 = parseFloat((document.getElementById('cal2') as HTMLInputElement).value);
        const cal3 = parseFloat((document.getElementById('cal3') as HTMLInputElement).value);

        // Calcular el promedio
        const promedio = (cal1 + cal2 + cal3) / 3;

        (document.getElementById('promedio') as HTMLInputElement).value = promedio.toFixed(2);
      }

        const calcularButton = document.getElementById('calPromedio');
        if (calcularButton) {
          calcularButton.addEventListener('click', calcularPromedio);
        }


      const id = this.route.snapshot.paramMap.get('id');

      if( id!== 'nuevo' ) {
        this.alumnoService.getAlumno( id )
        .subscribe( (resp: AlumnoModel ) => {
           this.alumno = resp;
           this.alumno.id = id;
        });
      }


    }

    guardar(form: NgForm) {

      if (form.invalid) {
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

      if (this.alumno.id) {
        peticion = this.alumnoService.actualizarAlumno(this.alumno);
        Swal.fire({
            title: this.alumno.nombre,
            text: 'Se actualizó correctamente',
            icon: 'success'
          }).then(() => {
            // Redirigir a la página deseada
            this.router.navigate(['/tabla']);
          });

      } else {
        peticion = this.alumnoService.crearAlumno(this.alumno);
        Swal.fire({
            title: this.alumno.nombre,
            text: 'Se creó correctamente',
            icon: 'success'
          }).then(() => {
            // Redirigir a la página deseada
            this.router.navigate(['/tabla']);
          });
      }

      peticion.subscribe(resp => {});
    }

}
