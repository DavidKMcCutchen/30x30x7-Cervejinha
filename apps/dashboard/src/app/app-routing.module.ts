import { NgModule } from '@angular/core';
import { Route, RouterModule } from "@angular/router";
import { CervejasComponent } from './cervejas/cervejas.component';
import { LoginComponent, WildComponent } from "@cerveja/ui-login";
import { CervejaComponent } from './cerveja/cerveja.component';


const routes: Route[] = [
  {path: '', component: LoginComponent },
  {path: 'wild', component: WildComponent},
  {path: 'cervejas', component: CervejasComponent},
  {path: 'cervejas/:id', component: CervejaComponent },
  {path: 'login', component: LoginComponent },
  {path: '**', redirectTo: 'wild', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule { }