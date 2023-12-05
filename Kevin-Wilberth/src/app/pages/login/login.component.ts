import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CredencialesService } from 'src/app/models/credenciales.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

 constructor(private credencialesService: CredencialesService, private router: Router) {}

  emailAdmin:string = "admin.admin@gmail.com";
  passwordAdmin:string = "123456";



  verificarCredenciales(email: string, password: string) {
    if (email === this.emailAdmin && password === this.passwordAdmin) {
      console.log("Credenciales correctas");
      this.credencialesService.setCredencialesCorrectas(true);
      this.router.navigate(['/inicio']);
    } else {
      console.log("Credenciales incorrectas");
      this.credencialesService.setCredencialesCorrectas(false);
    }
  }


}
