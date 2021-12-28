import { Note } from 'src/app/entities/note';
import { Component, Input, OnInit, Output, EventEmitter  } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  @Input() note: Note;
  @Input() globalAmount: number;
  @Input() createNewNote = false;
  @Output() createdNote: EventEmitter<Note> = new EventEmitter();
  noteForm: FormGroup;
  submitted = false;
  success = false;
  createdNoteTitle: string;
  id: string;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute) { 
    this.noteForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(255)]],
      text: ['', [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit(): void {
    
  }

  resetNote() {
    this.submitted = false;
    this.success = false;
    this.noteForm.reset(this.noteForm);
    this.createdNoteTitle = null;
  }

  createNote() {
    this.submitted = true;
    if (this.noteForm.valid) {
      const newNote: Note = new Note(
        this.globalAmount + 1,
        this.noteForm.controls.title.value,
        this.noteForm.controls.text.value
      );
      this.createdNoteTitle = newNote.title;
      this.createdNote.emit(newNote);
      this.success = true;
    }
  }

}
