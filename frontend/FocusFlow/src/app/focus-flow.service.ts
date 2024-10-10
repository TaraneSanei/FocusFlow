import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/models';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FocusFlowService {

  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  login(username:string, password: string): Observable<User>{
    return this.http.post<User>(this.apiUrl + '/login/', {username, password})
  }

}
