import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as filterActions from 'src/app/filter/filter.actions';
import * as todoActions from '../to-do.actions';

@Component({
  selector: 'app-to-do-footer',
  templateUrl: './to-do-footer.component.html',
  styleUrls: ['./to-do-footer.component.css']
})
export class ToDoFooterComponent implements OnInit {

  currentFilter: filterActions.validFilters = 'todos';
  filters: filterActions.validFilters[] = ['todos', 'completados', 'pendientes'];
  pendingTask: number = 0;

  constructor(private store: Store<AppState>) {

  }

  ngOnInit(): void {
    // reference to know only the select filter
    // this.store.select('filter').subscribe(filter => {
    //   this.currentFilter = filter;
    // })

    //Code to know all state
    this.store.subscribe(state => {
      this.currentFilter = state.filter;
      this.pendingTask = state.todos.filter(todo => !todo.isCompleted).length;
    })
  }

  selectFilter(filter: filterActions.validFilters) {
    this.store.dispatch(filterActions.filterAction({ setFilter: filter }))
  }

  clearcompleted() {
    this.store.dispatch(todoActions.clearCompleteAction());
  }

}
