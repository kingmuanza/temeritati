import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ProfilComponent } from './pages/profil/profil.component';

const routes: Routes = [
  { path: '', component: ProfilComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profil', component: ProfilComponent },
  { path: '**', redirectTo: "profil" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
