import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from 'src/app/primeng/prime.module';
import { ReporteUsuarioComponent } from './reporte-usuario/reporte-usuario.component';
import { ListaInformeProfComponent } from './lista-informe-prof/lista-informe-prof.component';
import { ListaProfecionalesComponent } from './lista-profecionales/lista-profecionales.component';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { ListaProveedorComponent } from './lista-proveedor/lista-proveedor.component';
import { FormularioReportePlagaComponent } from './formulario-reporte-plaga/formulario-reporte-plaga.component';
import { ListaReportesComponent } from './lista-reportes/lista-reportes.component';

@NgModule({
  declarations: [
    ListaInformeProfComponent,
    ListaProfecionalesComponent,
    ListaProveedorComponent,
    ListaReportesComponent,
    ListaUsuarioComponent,
    ReporteUsuarioComponent,
    FormularioReportePlagaComponent,
    ListaReportesComponent
  ],
  exports:[
    ListaInformeProfComponent,
    ListaProfecionalesComponent,
    ListaProveedorComponent,
    ListaReportesComponent,
    ListaUsuarioComponent,
    ReporteUsuarioComponent,
    FormularioReportePlagaComponent,
    ListaReportesComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ]
})
export class ComponentsModule { }
