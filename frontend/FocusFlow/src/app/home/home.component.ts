import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { JournalComponent } from "../journal/journal.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTabsModule, JournalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
