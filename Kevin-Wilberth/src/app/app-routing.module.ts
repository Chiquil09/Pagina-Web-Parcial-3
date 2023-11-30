import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TablaComponent } from './pages/tabla/tabla.component';
import { InicioComponent } from './navbar/inicio/inicio.component';
import { FormularioComponent } from './pages/formulario/formulario.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'tabla', component: TablaComponent},
  {path: 'formulario', component: FormularioComponent},
  {path: 'formulario/:id', component: FormularioComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
