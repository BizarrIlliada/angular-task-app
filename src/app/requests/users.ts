import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class RequestsUser {
  static USERS_URL = 'https://http-requests-practice-d4f8e-default-rtdb.europe-west1.firebasedatabase.app/users.json';

  constructor(private http: HttpClient) {}

  getUsers() {
    try {
      const response = this.http.get(RequestsUser.USERS_URL);

      console.log(123);
    } catch (error) {
      throw new Error(`Oops, you got an error - ${error}`);
    }
  }

  // *NEED FIXES* change any type
  addUser(payload: any): Observable<any> {
    try {
      return this.http.post(RequestsUser.USERS_URL, payload);
    } catch (error) {
      throw new Error(`Oops, you got an error - ${error}`);
    }
  }
}