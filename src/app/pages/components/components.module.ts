import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from 'src/app/primeng/prime.module';
import { HomeComponent } from './home/home.component';
import { ConsejosComponent } from './consejos/consejos.component';
import { InforrmesComponent } from './inforrmes/inforrmes.component';
import { PerfilesProfecionalesComponent } from './perfiles-profecionales/perfiles-profecionales.component';
import { ProductosComponent } from './productos/productos.component';

@NgModule({
  declarations: [
    HomeComponent,
    PerfilesProfecionalesComponent,
    ConsejosComponent,
    InforrmesComponent,
    ProductosComponent
  ],
  exports:[
    HomeComponent,
    PerfilesProfecionalesComponent,
    ConsejosComponent,
    InforrmesComponent,
    ProductosComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ]
})
export class ComponentsModule { }
