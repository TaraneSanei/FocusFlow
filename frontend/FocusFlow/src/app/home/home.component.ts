import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { JournalComponent } from '../journal/journal.component';
import { MasterlistComponent } from '../masterlist/masterlist.component';
import { FocusComponent } from '../focus/focus.component';
import { NoteComponent } from '../note/note.component';
import { PlanComponent } from '../plan/plan.component';
import { TodayComponent } from '../today/today.component';
import { MoneyComponent } from '../money/money.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTabsModule,
    JournalComponent,
    MasterlistComponent,
    FocusComponent,
    NoteComponent,
    PlanComponent,
    TodayComponent,
    MoneyComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
