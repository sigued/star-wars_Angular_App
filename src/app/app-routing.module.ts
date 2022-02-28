import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PeopleDetailComponent } from './people/people-detail/people-detail.component';
import { StarshipDetailComponent } from './starship/starship-detail/starship-detail.component';
import { StarshipListComponent } from './starship/starship-list/starship-list.component';

const routes: Routes = [
  {path: '', component: StarshipListComponent},
  {path: 'starship/:id', component: StarshipDetailComponent},
  {path: 'people/:id', component: PeopleDetailComponent},
  {path: '**', component: AppComponent, pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
