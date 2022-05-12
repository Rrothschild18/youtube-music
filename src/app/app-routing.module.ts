import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumSingleComponent } from './album-single/album-single.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'album/:albumId', component: AlbumSingleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
