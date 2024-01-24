import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from 'src/app/primeng/prime.module';
import { InformeFormularioComponent } from './informe-formulario/informe-formulario.component';
import { ListaInformesComponent } from './lista-informes/lista-informes.component';
import { ReporteUsuarioComponent } from './reporte-usuario/reporte-usuario.component';
import { ConsejoFormularioComponent } from './consejo-formulario/consejo-formulario.component';
import { ListaConsejosComponent } from './lista-consejos/lista-consejos.component';
import { PerfilProfecionalComponent } from './perfil-profecional/perfil-profecional.component';

@NgModule({
  declarations: [
    InformeFormularioComponent,
    ListaInformesComponent,
    ReporteUsuarioComponent,
    ConsejoFormularioComponent,
    ListaConsejosComponent,
    PerfilProfecionalComponent
  ],
  exports:[
    InformeFormularioComponent,
    ListaInformesComponent,
    ReporteUsuarioComponent,
    ConsejoFormularioComponent,
    ListaConsejosComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ]
})
export class ComponentsModule { }
