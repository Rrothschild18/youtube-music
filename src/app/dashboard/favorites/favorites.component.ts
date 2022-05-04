import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Artist } from 'src/models/artist.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  artists : Artist[] = []
  results : any 

  constructor(
    private dashboard:  DashboardService
  ) { }

  ngOnInit(): void {
    this.dashboard.fetchArtists()
      .subscribe(data => this.artists = [...data.artists])
  }

  totalFollowers (artist: Artist) {
    return `${artist.followers.total} inscritos`
  }
}
