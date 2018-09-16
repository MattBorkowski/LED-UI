import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LedService {
  url = 'http://192.168.1.76:3000/set-color'; 
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };
  constructor(private http: HttpClient) { }

  setColor(colors){
    let body = {
      r: colors[0],
      g: colors[1],
      b: colors[2]
    };
    console.log("sending color: %o",body);
    return this.http.post(this.url,body,this.httpOptions).pipe(
      catchError(this.handleError('setting color'))
    );
  };

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}
