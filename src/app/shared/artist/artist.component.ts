import { Artist } from 'src/models/artist.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  @Input() data! : Artist

  constructor() { }

  ngOnInit(): void {
  }

  totalFollowers (artist: Artist) {
    return `${artist.followers.total} inscritos`
  }

  urlImage(url : string = ''){
    return url || 'https://ra.ac.ae/wp-content/uploads/2017/02/user-icon-placeholder.png'
  }
}
