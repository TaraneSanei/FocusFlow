import { Component } from '@angular/core';
import { FocusFlowService } from '../focus-flow.service';
import { AppState } from '../state/app.state';
import { Store } from '@ngrx/store';
import { LoadJournal } from '../state/journal/journal.actions';
import { CommonModule } from '@angular/common';
import { selectJournal } from '../state/journal/journal.selector';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { JournalEntry } from '../models/models';


@Component({
  selector: 'app-journal',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule
  ],
  templateUrl: './journal.component.html',
  styleUrl: './journal.component.css'
})
export class JournalComponent {

  journal$ = this.store.select(selectJournal)
  // newJournal: JournalEntry = {
  //   Time: "",
  //   Date: "",
  //   Note: ""
  // }
  constructor(private focusflowService:FocusFlowService, private store: Store<AppState>){
    this.store.dispatch(LoadJournal())
  }
}
