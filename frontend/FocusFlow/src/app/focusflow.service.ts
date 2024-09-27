import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { journal } from './models/models';

@Injectable({
  providedIn: 'root'
})
export class FocusflowService {

  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getJournals() {
    return this.http.get<journal[]>(this.apiUrl);
  }

  saveJournal() {
    
  }
}
