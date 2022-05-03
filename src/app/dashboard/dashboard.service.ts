import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiTokenService } from '../api-token.service';
import { Artist } from 'src/models/artist.model';

@Injectable({
  providedIn: 'root'
})

export class DashboardService {

  constructor(
    private apiToken: ApiTokenService,
    private http: HttpClient
  ) { }
  


  fetchArtists(id: string = ''){
    const headers = new HttpHeaders()
    .set("Content-Type", "application/json")
    .set("Authorization", `Bearer ${this.apiToken.getToken()}` )

    return this.http.get<{artists: Artist[]}>(`https://api.spotify.com/v1/artists/?ids=${this.artistsIDS()}`, {headers})
  }

  fetchArtist(id: any): Observable<any>{
    const headers = new HttpHeaders()
    .set("Content-Type", "application/json")
    .set("Authorization", `Bearer ${this.apiToken.getToken()}` )

    return this.http.get(`https://api.spotify.com/v1/artists/${id}`, {headers})
  }
  
  fetchSearch(query: any): Observable<any>{
    const headers = new HttpHeaders()
    .set("Content-Type", "application/json")
    .set("Authorization", `Bearer ${this.apiToken.getToken()}`)

    return this.http.get(`https://api.spotify.com/v1/search?q=${query}&type=track,artist,playlist,album`, {headers})
  }

  artistsIDS(){
    return '1laW2o8gMUVLMCVPHuuaHI,30tUlKZ8oLo0BnN6n0GZKD,0UF7XLthtbSF2Eur7559oV,0qG3lxHmrUeKzL1BJJ7IBN,6QrQ7OrISRYIfS5mtacaw2,0SwO7SWeDHJijQ3XNS7xEE,7CajNmpbOovFoOoasH2HaY,5sWHDYs0csV6RS48xBl0tH,6AyATGg7mDgBlZ4N5uNog0,4Ly0KABsxlx4fNj63zJTrF'
  }
}
