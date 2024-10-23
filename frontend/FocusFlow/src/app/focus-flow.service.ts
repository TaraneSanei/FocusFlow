import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { JournalEntry, User } from './models/models';
import { environment } from '../environments/environment';
import { Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
import { AppState } from './state/app.state';

@Injectable({
  providedIn: 'root'
})
export class FocusFlowService {

  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient, private store:Store<AppState>, private cookieService: CookieService) {
   }

  login(email:string, password: string): Observable<User>{
    const csrfToken = this.cookieService.get('csrftoken');
    const headers = new HttpHeaders({
      'X-CSRFToken': csrfToken
    });
    return this.http.post<User>(this.apiUrl + 'user/login', {email, password}, {headers})
  }

  CsrfToken():Observable<string>{
    return this.http.get<string>(this.apiUrl + 'user/csrf_token')
  }

  getJournal(): Observable<JournalEntry[]>{
    return this.http.get<JournalEntry[]>(this.apiUrl + 'journal/')
  }

}
