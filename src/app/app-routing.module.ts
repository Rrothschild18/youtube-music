import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistSingleComponent } from './artist-single/artist-single.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'artist/:artistId', component: ArtistSingleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
