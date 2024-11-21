import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { RecetasComponent } from './components/recetas/recetas.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { ContactosComponent } from './components/contactos/contactos.component';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }, // Redirige a 'inicio' si el path está vacío
  { path: 'inicio', component: InicioComponent },
  { path: 'recetas/:id', component: RecetasComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'contactos', component: ContactosComponent },
  { path: '**', redirectTo: 'inicio' } // Maneja rutas no válidas redirigiendo a 'inicio'
];
