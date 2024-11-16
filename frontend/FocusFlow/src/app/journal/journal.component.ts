import { Component, ElementRef, HostListener, OnInit, signal, ViewChild } from '@angular/core';
import { FocusFlowService } from '../focus-flow.service';
import { AppState } from '../state/app.state';
import { Store } from '@ngrx/store';
import { AddJournalEntry, DeleteJournalEntry, EditJournalEntry, LoadJournal } from '../state/journal/journal.actions';
import { CommonModule } from '@angular/common';
import { selectJournal, selectNext } from '../state/journal/journal.selector';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { JournalEntry } from '../models/models';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';


@Component({
  selector: 'app-journal',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatButton
  ],
  templateUrl: './journal.component.html',
  styleUrl: './journal.component.css'
})
export class JournalComponent {

  journal$ = this.store.select(selectJournal)
  next$ = this.store.select(selectNext)
  newJournal: JournalEntry = {
    DateTime: new Date,
    Note: ""
  }

  edittableJournal: JournalEntry = {
    id: undefined,
    DateTime:new Date,
    Note: ""
  }

  editing = signal<number|undefined>(undefined)

  constructor(private focusflowService: FocusFlowService, private store: Store<AppState>) {
    this.store.dispatch(LoadJournal({url: null}));
  }


  Addjournal() {
    this.store.dispatch(AddJournalEntry({ journalEntry: this.newJournal }))
    this.newJournal = {
      DateTime: new Date(),
      Note: ""
    }
  }

  
  @HostListener("window:scroll", [])
  onScroll(event: any){
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 2) {
      this.loadMoreEntries();
    }
  }

  loadMoreEntries(){
    console.log("scrolling")
    let nextUrl: string | null = null;
    this.next$.subscribe((url)=>
    nextUrl = url);
    if (nextUrl != null){
      this.store.dispatch(LoadJournal({url: nextUrl}))
    }
  }

  onDateChange(date: string) {
    const [year, month, day] = date.split('-').map(Number);
    this.newJournal.DateTime.setFullYear(year, month - 1, day);
  }

  onTimeChange(time: string) {
    const [hours, minutes] = time.split(':').map(Number);
    this.newJournal.DateTime.setHours(hours, minutes);
  }

  toggleEdit(journal: JournalEntry){
    this.editing.set(journal.id)
    this.edittableJournal = {
      Note: journal.Note,
      id: journal.id,
      DateTime: journal.DateTime
    }
  }

  Editjournal(journal: JournalEntry){
    this.store.dispatch(EditJournalEntry({journalEntry: this.edittableJournal}))
    this.editing.set(undefined)
    this.edittableJournal = {
      id: undefined,
      DateTime:new Date,
      Note: ""
    }
  }

  cancelEdit(){
    this.editing.set(undefined)

  }

  Deletejournal(journal:JournalEntry){
    this.store.dispatch(DeleteJournalEntry({journalEntry: journal}))
  }

}
