import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
// import { tokens } from 'src/tokens';
// import { Artist } from '../models/artist.model'
import { Token } from '../models/token.model'

@Injectable({
  providedIn: 'root'
})

export class ApiTokenService {
  accessToken?: string
  url: string = 'https://accounts.spotify.com/api/token'

  constructor(
    private http: HttpClient
  ){ 
    if(!this.hasToken()) this.fetchAndSaveToken()
  }

  fetchToken() {
    const headers = new HttpHeaders()
            .set("Content-Type", "application/x-www-form-urlencoded")
            .set("Authorization", "Basic MWUyZWJiNThjMWUzNDlkMWE3NzYxMTdiMWZmOTdmZTk6OTFjYjEzZDZlNTFmNGRiMmFhMTM5OGRjMzUzMWJjOTk=" )

    return this.http.post<Token>(this.url, "grant_type=client_credentials", { headers })
  }

  hasToken(){
    return !!window.localStorage.getItem('accessToken')?.length;
  }

  destroyToken() {
    if(this.hasToken()) window.localStorage.removeItem('accessToken')
  }

  fetchAndSaveToken(){
    //401 token
    return this.fetchToken()
      .subscribe(({ access_token }) => {
        this.destroyToken()
        window.localStorage.setItem('accessToken', access_token)
        this.accessToken = access_token
        return access_token
      })
  }

  getToken() {
    return window.localStorage.getItem('accessToken')
  }

  saveToken(data: any) {
    this.destroyToken()
    window.localStorage.setItem('accessToken', data.access_token)
  }
}
