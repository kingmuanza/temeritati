import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CraDetailComponent } from './pages/cra-detail/cra-detail.component';
import { CraComponent } from './pages/cra/cra.component';
import { EvaluationsNouveauComponent } from './pages/evaluations-nouveau/evaluations-nouveau.component';
import { EvaluationsResumeComponent } from './pages/evaluations-resume/evaluations-resume.component';
import { EvaluationsComponent } from './pages/evaluations/evaluations.component';
import { LoginComponent } from './pages/login/login.component';
import { Login2Component } from './pages/login2/login2.component';
import { ProfilComponent } from './pages/profil/profil.component';

const routes: Routes = [
  { path: '', component: CraComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login/first', component: Login2Component },
  { path: 'profil', component: ProfilComponent },
  { path: 'cra', component: CraComponent },
  { path: 'cra/detail', component: CraDetailComponent },
  { path: 'cra/detail/:id', component: CraComponent },
  { path: 'evaluations', component: EvaluationsComponent },
  { path: 'evaluations/nouveau', component: EvaluationsNouveauComponent },
  { path: 'evaluations/resume', component: EvaluationsResumeComponent },
  { path: '**', redirectTo: "cra" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
