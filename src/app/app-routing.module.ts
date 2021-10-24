import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//importamos los componentes
import { InicioComponent } from './componentes/inicio/inicio.component';
import { RecetasComponent } from './componentes/recetas/recetas.component';
import { ContactenosComponent } from './componentes/contactenos/contactenos.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { NoticiasComponent } from './componentes/noticias/noticias.component';
/// creamos las rutas para los componentes  
const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'recetas', component: RecetasComponent },
  { path: 'contactenos', component: ContactenosComponent },
  { path: 'nosotros', component: NosotrosComponent},
  { path: 'noticias', component: NoticiasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
