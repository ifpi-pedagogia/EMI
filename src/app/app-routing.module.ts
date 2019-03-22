import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {path: '', loadChildren: './basic/basic.module#BasicModule'},
  {path: 'games', loadChildren: './games/games.module#GamesModule'},
  {path: 'records', loadChildren: './records/records.module#RecordsModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
