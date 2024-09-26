import { Component } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-journal',
  standalone: true,
  imports: [MatFormField,
    CommonModule,
    FormsModule
  ],
  templateUrl: './journal.component.html',
  styleUrl: './journal.component.css'
})
export class JournalComponent {

  newNote: string = ""

}
