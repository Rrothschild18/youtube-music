import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';


import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { FavoritesComponent } from './dashboard/favorites/favorites.component';
import { SearchInputComponent } from './shared/search-input/search-input.component';
import { AlbumComponent } from './shared/album/album.component';
import { ResultComponent } from './dashboard/result/result.component';
import { ArtistComponent } from './shared/artist/artist.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FavoritesComponent,
    SearchInputComponent,
    AlbumComponent,
    ResultComponent,
    ArtistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
