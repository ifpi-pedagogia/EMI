import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicRoutingModule } from './basic-routing.module';
import { HomeComponent } from './home/home.component';
import { EducationComponent } from './education/education.component';
import { BriefHistoryComponent } from './brief-history/brief-history.component';

@NgModule({
  declarations: [HomeComponent, EducationComponent, BriefHistoryComponent],
  imports: [
    CommonModule,
    BasicRoutingModule
  ]
})
export class BasicModule { }
