import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Array que contendrá valores de rutas, allí se declaran las rutas
// La ruta es un objeto que esta constituido de un path, relacionado a un component
const routes: Routes = [
  {
    path: "", // localhost:4200/
    loadChildren:() => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path:'', // Todo: localhost:4200/
    loadChildren:() => import('./modules/home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
