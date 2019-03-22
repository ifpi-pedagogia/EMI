import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionsComponent } from './questions/questions.component';
import { TrueOrFalseComponent } from './true-or-false/true-or-false.component';

const routes: Routes = [
  {path: 'true-or-false', component: TrueOrFalseComponent},
  {path: 'quiz', component: QuestionsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
