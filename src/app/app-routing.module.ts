import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumSingleComponent } from './album-single/album-single/album-single.component';
import { ArtistSingleComponent } from './artist-single/artist-single.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'artist/:artistId', component: ArtistSingleComponent },
  { path: 'album/:albumId', component: AlbumSingleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
