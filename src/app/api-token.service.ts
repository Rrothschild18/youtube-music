import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { tokens } from 'src/tokens';
// import { Artist } from '../models/artist.model'
import { Token } from '../models/token.model'

@Injectable({
  providedIn: 'root'
})

export class ApiTokenService {
  accessToken?: string

  constructor(
    private http: HttpClient
  ){ 
    if(!this.hasToken()) this.fetchAndSaveToken()
  }

  fetchToken() {
    const headers = new HttpHeaders()
            .set("Content-Type", "application/x-www-form-urlencoded")
            .set("Authorization", "Basic MWUyZWJiNThjMWUzNDlkMWE3NzYxMTdiMWZmOTdmZTk6OTFjYjEzZDZlNTFmNGRiMmFhMTM5OGRjMzUzMWJjOTk=" )

    return this.http.post<Token>(
      'https://accounts.spotify.com/api/token', 
      "grant_type=client_credentials",
      { headers })
  }

  hasToken(){
    return !!window.localStorage.getItem('accessToken')?.length;
  }

  fetchAndSaveToken(){
    this.fetchToken()
      .subscribe(({ access_token }) => {
        window.localStorage.setItem('accessToken', access_token)
        this.accessToken = access_token
      })
  }

  getToken() {
    return this.accessToken
  }
}
