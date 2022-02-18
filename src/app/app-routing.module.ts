import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsApp } from './components';

const routes: Routes = [{
  path: "",
  children: [
    { path: "home", component: ComponentsApp[3] },
    { path: "pokemons", component: ComponentsApp[4] },
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "**", redirectTo: "home", pathMatch: "full" }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
