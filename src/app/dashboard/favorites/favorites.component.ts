import { Component, OnInit } from '@angular/core';
import { ApiTokenService } from 'src/app/api-token.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  constructor(
    private apiToken: ApiTokenService
  ) { }

  ngOnInit(): void {
    console.log(this.apiToken.hasToken())
  }
}
