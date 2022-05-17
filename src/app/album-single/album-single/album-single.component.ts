import { Track } from './../../shared/track/track.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from 'src/app/dashboard/dashboard.service';

@Component({
  selector: 'app-album-single',
  templateUrl: './album-single.component.html',
  styleUrls: ['./album-single.component.scss']
})
export class AlbumSingleComponent implements OnInit {

    album: any
    albumId?: string
    albumTracks?: Track[]

  constructor(
    private route: ActivatedRoute,
    private dashboard: DashboardService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (data) => {
        this.albumId = data['albumId'];
  
        
        this.dashboard.fetchAlbum(this.albumId).subscribe((data: any) => {
          console.log(data)
          this.album = data
          this.albumTracks = data.tracks.items
        })
      },

      complete: () => { console.log('done') }
    }
  )}


  albumDuration () {
    let totalDuration = this.albumTracks?.reduce((acc, curr)=> {
      return acc += curr.duration_ms
    }, 0)

    

    return this.millisToMinutesAndSeconds(totalDuration)
  }


   millisToMinutesAndSeconds(millis: number = 0) {
      let minutes = Math.floor(millis / 60000);

      return `${minutes} min` 
  }

  duration(millis: any){
    const date = new Date(millis);
    
    return `${date.getMinutes()}:${this.minTwoDigits(date.getSeconds())}`
  }

  albumReleaseDate(launch: string) {
    const date = new Date(launch);

    return `${date.getFullYear()}`
  }

  minTwoDigits(n: any) {
    return (n < 10 ? '0' : '') + n;
  }
}
