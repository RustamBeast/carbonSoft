import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Note } from 'src/app/entities/note';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() notes: Note[];
  @Output() chosenNote: EventEmitter<Note> = new EventEmitter();
  @Output() createNote: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  choose(target: Note) {
    for (let n of this.notes) {
      let elem = document.getElementById('note'+n.id);
      elem.classList.remove('highlight');
    }
    const element = document.getElementById('note' + target.id);
    element.classList.add('highlight');
    this.chosenNote.emit(target);
  }

  addNote(target: boolean) {
    for (let n of this.notes) {
      let elem = document.getElementById('note'+n.id);
      elem.classList.remove('highlight');
    }
    this.createNote.emit(target);
  }

}
