import { DashboardService } from 'src/app/dashboard/dashboard.service';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Track } from '../shared/track/track.model';
import { combineLatest, combineLatestInit } from 'rxjs/internal/observable/combineLatest';

@Component({
  selector: 'app-artist-single',
  templateUrl: './artist-single.component.html',
  styleUrls: ['./artist-single.component.scss']
})
export class ArtistSingleComponent implements OnInit {

  topTracks!: {tracks: Track[]}
  artistId ?: string
  artist: any
  related: any
  albums: any

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dashboard: DashboardService,
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe({
      next: (data) => {
        this.artistId = data['artistId'];
  

        //move to service
        let artistSingleData = combineLatest([
          this.dashboard.fetchArtistTopTracks(this.artistId),
          this.dashboard.fetchArtist(this.artistId),
          this.dashboard.fetchArtistAlbum(this.artistId),
          this.dashboard.fetchArtistRelated(this.artistId)
        ])
        
        artistSingleData.subscribe(combinedData => {
          let [tracks, artist, albums, related] = combinedData
          
          this.topTracks = tracks
          this.artist = artist
          this.albums = albums
          this.related = related
        })
      },

      complete: () => { console.log('done') }
    }
  )}

  handleRedirect(){
    this.router.navigate(['/artist', this.artistId])
  }
}




