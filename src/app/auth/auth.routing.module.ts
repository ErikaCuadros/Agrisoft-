import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from '../not-found/not-found.component';
import { OpcionComponent } from './opcion/opcion.component';
import { LoginComponent } from './login/login.component';
import { RegistroAdminComponent } from './registro-admin/registro-admin.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { RegistroProfesionalComponent } from './registro-profesional/registro-profesional.component';
import { RegistroProveedorComponent } from './registro-proveedor/registro-proveedor.component';

const routes: Routes = [
  { path: 'opcion', component: OpcionComponent },
  { path: 'login', component: LoginComponent},
  { path: 'admin', component: RegistroAdminComponent},
  { path: 'usuario', component: RegistroUsuarioComponent},
  { path: 'profecional', component: RegistroProfesionalComponent},
  { path: 'proveedor', component: RegistroProveedorComponent},
  { path: '**', component: NotFoundComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  
})
export class AuthRoutingModule { }
