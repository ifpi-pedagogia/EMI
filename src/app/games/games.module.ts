import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';

import { TrueOrFalseComponent } from './true-or-false/true-or-false.component';
import { QuestionsComponent } from './questions/questions.component';

@NgModule({
  declarations: [TrueOrFalseComponent, QuestionsComponent],
  imports: [
    CommonModule,
    GamesRoutingModule
  ],
})
export class GamesModule { }
