import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { validFilters } from 'src/app/filter/filter.actions';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  todoList: Todo[] = [];
  currentFilter!: validFilters;

  constructor(private store: Store<AppState>) {

  }
  ngOnInit(): void {
    // this.store.select('todos')
    //   .subscribe(todos => this.todoList = todos);

    this.store.subscribe(state => {
      this.todoList = state.todos;
      this.currentFilter = state.filter
    })
  }

}
