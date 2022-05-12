import { Injectable, Injector } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders, HttpClient
} from '@angular/common/http';

import { Observable, catchError, throwError, switchMap } from 'rxjs';
import { Token } from 'src/models/token.model';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class NoopInterceptor implements HttpInterceptor {

  url: string = 'https://accounts.spotify.com/api/token'

  constructor(
    private http: HttpClient,
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
      const authReq = req.clone();
  
    return next.handle(authReq)
      .pipe(catchError(error => {
        if(error.status === 401) {
          this.destroyToken()
          return this.handleRefreshToken(req, next)
        }

        return throwError(()=> 'Server Error')
    }))
  }

  handleRefreshToken(request: HttpRequest<any>, next: HttpHandler){

    return this.fetchToken().pipe(
      switchMap((data: any) => {
        const authToken = data.access_token
        this.saveToken(data)

        const authReq = request.clone({
          headers: request.headers.set('Authorization', `Bearer ${authToken}`)
        });

        return next.handle(authReq)
      })
    )
  }

  fetchToken() {
    const headers = new HttpHeaders()
            .set("Content-Type", "application/x-www-form-urlencoded")
            .set("Authorization", "Basic MWUyZWJiNThjMWUzNDlkMWE3NzYxMTdiMWZmOTdmZTk6OTFjYjEzZDZlNTFmNGRiMmFhMTM5OGRjMzUzMWJjOTk=" )

    return this.http.post<Token>(this.url, "grant_type=client_credentials", { headers })
  }

  saveToken(data: any) {
    this.destroyToken()
    window.localStorage.setItem('accessToken', data.access_token)
  }

  destroyToken() {
    if(this.hasToken()) window.localStorage.removeItem('accessToken')
  }

  hasToken(){
    return !!window.localStorage.getItem('accessToken')?.length;
  }

  getToken() {
    return window.localStorage.getItem('accessToken')
  }
}