import { ActivatedRoute } from '@angular/router';
import { Note } from 'src/app/entities/note';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  notes: Note[];
  chosenNote: Note;
  createNote: boolean;
  createdNote: Note;
  id: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (localStorage.getItem("notes") == null) {
      this.notes = [new Note(1, 'title1', 'text1'),
                    new Note(2, 'title2', 'text2'),
                    new Note(3, 'title3', 'text3'),
                    new Note(4, 'title4', 'text4'),
                    new Note(5, 'title5', 'text5')];
      localStorage.setItem("notes", JSON.stringify(this.notes));
    }
    else {
      this.notes = JSON.parse(localStorage.getItem("notes"));
    }
    this.id = parseInt(this.route.snapshot.params['id']);
    if (this.id !== NaN && this.notes.length >= this.id && this.id > 0) {
      this.chosenNoteHandler(this.notes[this.id-1]);
    }
  }

  chosenNoteHandler(event: Note) {
    this.chosenNote = event;
    this.createNote = false;
  }

  createNoteHandler(event: boolean) {
    this.createNote = event;
  }

  createdNoteHandler(event: Note) {
    this.notes.push(event);
    localStorage.setItem("notes", JSON.stringify(this.notes));
  }

}
