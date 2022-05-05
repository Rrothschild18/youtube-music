import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {
  @Input() data! : any

  constructor() { }

  ngOnInit(): void {
  }
}
