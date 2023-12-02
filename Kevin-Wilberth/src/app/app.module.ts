import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './navbar/inicio/inicio.component';
import { FormularioComponent } from './pages/formulario/formulario.component';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { MenuComponent } from './navbar/menu/menu.component';
import { TablaComponent } from './pages/tabla/tabla.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    FormularioComponent,
    MenuComponent,
    TablaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
