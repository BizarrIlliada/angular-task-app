import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class RequestsUser {
  static USERS_URL = 'https://http-requests-practice-d4f8e-default-rtdb.europe-west1.firebasedatabase.app/users.json';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(RequestsUser.USERS_URL).pipe(
      map(result => result),

      catchError(error => {
        throw new Error('Oops, you got an error - ' + error)
      })
    );
  }

  // *NEED FIXES* change any type
  addUser(payload: any) {
    return this.http.post(RequestsUser.USERS_URL, payload).pipe(
      catchError(error => {
        throw new Error('Oops, you got an error - ' + error)
      }),
    );
  }
}