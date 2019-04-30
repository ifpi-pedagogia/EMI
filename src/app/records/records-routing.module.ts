import { EntrevistaComponent } from './entrevista/entrevista.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepositionsComponent } from './depositions/depositions.component';
import { MuralOneComponent } from './mural-one/mural-one.component';
import { MuralOuthersComponent } from './mural-outhers/mural-outhers.component';
import { DepositionDetailsComponent } from './deposition-details/deposition-details.component';
import { Mural3DetailsComponent } from './mural-outhers/mural3-details/mural3-details.component';
import { Mural2DetailsComponent } from './mural-outhers/mural2-details/mural2-details.component';
import { InterviewDetailsComponent } from './interview-details/interview-details.component';

const routes: Routes = [
  {path: 'mural-one', component: MuralOneComponent},
  {path: 'mural-outhers', component: MuralOuthersComponent},
  {path: 'depositions-in-videos', component: DepositionsComponent},
  {path: 'interviews', component: EntrevistaComponent},
  {path: 'interviews/:id', component: InterviewDetailsComponent},
  {path: 'deposition/:id', component: DepositionDetailsComponent},
  {path: 'mural-two/:id', component: Mural2DetailsComponent},
  {path: 'mural-tre/:id', component: Mural3DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecordsRoutingModule { }
