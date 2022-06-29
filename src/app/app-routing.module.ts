import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { Login2Component } from './pages/login2/login2.component';
import { ProfilComponent } from './pages/profil/profil.component';

const routes: Routes = [
  { path: '', component: ProfilComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login/first', component: Login2Component },
  { path: 'profil', component: ProfilComponent },
  { path: '**', redirectTo: "profil" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
