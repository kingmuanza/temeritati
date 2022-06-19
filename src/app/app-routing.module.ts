import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilComponent } from './pages/profil/profil.component';

const routes: Routes = [
  {path: '', component: ProfilComponent},
  {path: 'profil', component: ProfilComponent},
  {path: '**', redirectTo: "profil"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
