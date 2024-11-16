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

  getJournal(url:string |null){
    if (url){
      return this.http.get<any>(url)
    }
    return this.http.get<any>(this.apiUrl + 'journal/')
  }

  addJournal(journalEntry: JournalEntry){
    return this.http.post<JournalEntry>(this.apiUrl + 'journal/', journalEntry)
  }

  editJournal(journalEntry: JournalEntry){
    return this.http.put<JournalEntry>(this.apiUrl + 'journal/' + journalEntry.id , journalEntry)
  }

  deleteJournal(journalEntry: JournalEntry){
    return this.http.delete<JournalEntry>(this.apiUrl + 'journal/' + journalEntry.id)
  }

}
