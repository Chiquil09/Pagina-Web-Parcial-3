import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './navbar/inicio/inicio.component';
import { TablaComponent } from './pages/tabla/tabla.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { TablaAlumnosComponent } from './pages/tabla-alumnos/tabla-alumnos.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'login', component: LoginComponent},
  {path: 'tabla', component: TablaComponent},
  {path: 'tabla-alumnos', component: TablaAlumnosComponent},
  { path: 'formulario/:id', component: FormularioComponent },
  {path: 'formulario', component: FormularioComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
