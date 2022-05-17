import { Observable, map, Subject, catchError, throwError, switchMap } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiTokenService } from '../api-token.service';
import { Artist } from 'src/models/artist.model';
import { Track } from '../shared/track/track.model';

@Injectable({
  providedIn: 'root'
})

export class DashboardService {
  apiRoot: string = 'https://api.spotify.com/v1'
  headers = new HttpHeaders()
  .set("Content-Type", "application/json")
  .set("Authorization", `Bearer ${this.apiToken.getToken()}`)

  broadcastSearchResults = new Subject<any>();
  broadcastSearchQuery = new Subject<string>();

  searchResults$ = this.broadcastSearchResults.asObservable();
  searchQuery$ = this.broadcastSearchQuery.asObservable();

  constructor(
    private apiToken: ApiTokenService,
    private http: HttpClient
  ) { }
  

  fetchArtists(id: string = ''): Observable<{artists: Artist[]}>{
    const apiURL = `${this.apiRoot}/artists/?ids=${this.artistsIDS()}`

    return this.http.get<{artists: Artist[]}>(apiURL, { headers:this.headers })
  }

  fetchArtist(id: any): Observable<any>{
    const apiURL = `${this.apiRoot}/artists/${id}`

    return this.http.get<Artist>(apiURL, { headers: this.headers })
  }
  
  fetchSearch(query: any) {
    const apiURL = `${this.apiRoot}/search?q=${query}&type=track,artist,playlist,album`

    return this.http.get<any>(apiURL, { headers:this.headers }).pipe(
      map(data => data)
    );
  }


  fetchArtistAlbum(id: any) {
    const apiURL = `${this.apiRoot}/artists/${id}/albums?market=US`

    return this.http.get<any>(apiURL, { headers:this.headers })
  }

  fetchAlbum(id: any): Observable<Response> {
    const apiURL = `${this.apiRoot}/albums/${id}`

    return this.http.get<any>(apiURL, { headers:this.headers })
  }


  fetchArtistRelated(id: any){
    const apiURL = `${this.apiRoot}/artists/${id}/related-artists`

    return this.http.get<Artist[]>(apiURL, { headers:this.headers })
  }

  artistsIDS(){
    return '1laW2o8gMUVLMCVPHuuaHI,30tUlKZ8oLo0BnN6n0GZKD,0UF7XLthtbSF2Eur7559oV,0qG3lxHmrUeKzL1BJJ7IBN,6QrQ7OrISRYIfS5mtacaw2,0SwO7SWeDHJijQ3XNS7xEE,7CajNmpbOovFoOoasH2HaY,5sWHDYs0csV6RS48xBl0tH,6AyATGg7mDgBlZ4N5uNog0,4Ly0KABsxlx4fNj63zJTrF'
  }
  emitSearchResults(result: any) {
    this.broadcastSearchResults.next(result);
  }

  emitSearchQuery(query: string) {
    this.broadcastSearchResults.next(query);
  }

  fetchArtistTopTracks(id: any) : Observable<{tracks: Track[]}> {
    const apiURL = `${this.apiRoot}/artists/${id}/top-tracks?market=US`

    return this.http.get<{tracks: Track[]}>(apiURL, { headers:this.headers })
  }
}
