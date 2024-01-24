import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from 'src/app/primeng/prime.module';
import { ListaInformesComponent } from './lista-informes/lista-informes.component';
import { ListaPerfilesComponent } from './lista-perfiles/lista-perfiles.component';
import { ProductoFormularioComponent } from './producto-formulario/producto-formulario.component';
import { ListaProductoComponent } from './lista-producto/lista-producto.component';
import { PerfilProveedorComponent } from './perfil-proveedor/perfil-proveedor.component';

@NgModule({
  declarations: [
    ListaInformesComponent,
    ListaPerfilesComponent,
    ProductoFormularioComponent,
    ListaProductoComponent,
    PerfilProveedorComponent
  ],
  exports:[
    ListaInformesComponent,
    ListaPerfilesComponent,
    ProductoFormularioComponent,
    ListaProductoComponent,
    PerfilProveedorComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ]
})
export class ComponentsModule { }
