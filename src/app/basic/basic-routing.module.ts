import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BriefHistoryComponent } from './brief-history/brief-history.component';
import { EducationComponent } from './education/education.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'breve-historico', component: BriefHistoryComponent},
  {path: 'EPI', component: EducationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicRoutingModule { }
