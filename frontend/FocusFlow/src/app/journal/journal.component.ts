import { Component } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';



@Component({
  selector: 'app-journal',
  standalone: true,
  imports: [MatFormField,
    CommonModule,
    FormsModule,
    MatInputModule
  ],
  templateUrl: './journal.component.html',
  styleUrl: './journal.component.css'
})
export class JournalComponent {

  newNote: string = ""

}
