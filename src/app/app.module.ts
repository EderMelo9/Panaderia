import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecetasComponent } from './componentes/recetas/recetas.component';
import { ContactenosComponent } from './componentes/contactenos/contactenos.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { NoticiasComponent } from './componentes/noticias/noticias.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { InicioComponent } from './componentes/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    RecetasComponent,
    ContactenosComponent,
    NosotrosComponent,
    NoticiasComponent,
    NavegacionComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
