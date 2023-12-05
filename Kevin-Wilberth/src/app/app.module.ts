import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './navbar/inicio/inicio.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { environment } from 'src/environments/environment';
import { MenuComponent } from './navbar/menu/menu.component';
import { TablaComponent } from './pages/tabla/tabla.component';
import { AngularFireModule } from '@angular/fire/compat';
import { LoginComponent } from './pages/login/login.component';
import { TablaAlumnosComponent } from './pages/tabla-alumnos/tabla-alumnos.component';
import { CredencialesService } from './models/credenciales.model';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    FormularioComponent,
    MenuComponent,
    TablaComponent,
    LoginComponent,
    TablaAlumnosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [CredencialesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
