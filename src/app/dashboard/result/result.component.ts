import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  results: any

  constructor(private dashboard : DashboardService) { }

  ngOnInit(): void {
    this.dashboard.searchResults$.subscribe(
      res => {
        console.log('resssssssssssssss', res)
      });
  }
}
