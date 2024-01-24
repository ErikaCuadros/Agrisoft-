import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './pages/components/home/home.component';
import { ConsejosComponent } from './pages/components/consejos/consejos.component';
import { InforrmesComponent } from './pages/components/inforrmes/inforrmes.component';
import { PerfilesProfecionalesComponent } from './pages/components/perfiles-profecionales/perfiles-profecionales.component';
import { AuthRoutingModule } from './auth/auth.routing.module';
import { ComponentsRoutingModule } from './pages/components/components.routing.module';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'consejos', component: ConsejosComponent},
  { path: 'informes', component: InforrmesComponent},
  { path: 'perfiles', component: PerfilesProfecionalesComponent },
  { path: '**', component: NotFoundComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule, AuthRoutingModule, ComponentsRoutingModule ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
