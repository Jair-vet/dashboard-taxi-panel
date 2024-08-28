import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { ConductoresComponent } from './modules/conductores/conductores.component';
import { LayoutComponent } from '../app/components/layout/layout.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'conductores', component: ConductoresComponent },
    ]
  },
  // { path: 'conductores', component: ConductoresComponent },
  // { path: 'cambio-password', component: CambioPasswordComponent, canActivate: [AuthGuard] },
  // { path: 'recuperar-membresia', component:  RecuperarMembresiaComponent},
  { path: '**', redirectTo: 'login' } // Redirige cualquier ruta no definida al login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
