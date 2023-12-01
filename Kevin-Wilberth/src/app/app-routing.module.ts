import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './navbar/inicio/inicio.component';
import { TablaComponent } from './pages/tabla/tabla.component';
import { FormularioComponent } from './pages/formulario/formulario.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'tabla', component: TablaComponent},
  { path: 'formulario/:id', component: FormularioComponent },
  {path: 'formulario', component: FormularioComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
