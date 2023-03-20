import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../to-do.actions';

@Component({
  selector: 'app-to-do-page',
  templateUrl: './to-do-page.component.html',
  styleUrls: ['./to-do-page.component.css']
})
export class ToDoPageComponent implements OnInit {

  allCompleted!: boolean;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
  }

  selectAll() {
    this.allCompleted = !this.allCompleted;
    this.store.dispatch(actions.changeAllToDo({ changeValue: this.allCompleted }));
  }

}
