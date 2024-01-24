import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpcionComponent } from './opcion/opcion.component';
import { LoginComponent } from './login/login.component';
import { RegistroAdminComponent } from './registro-admin/registro-admin.component';
import { RegistroProfesionalComponent } from './registro-profesional/registro-profesional.component';
import { RegistroProveedorComponent } from './registro-proveedor/registro-proveedor.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    OpcionComponent,
    LoginComponent,
    RegistroAdminComponent,
    RegistroProfesionalComponent,
    RegistroProveedorComponent,
    RegistroUsuarioComponent
  ],
  exports:[
    OpcionComponent,
    LoginComponent,
    RegistroAdminComponent,
    RegistroProfesionalComponent,
    RegistroProveedorComponent,
    RegistroUsuarioComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
})
export class AuthModule { }
