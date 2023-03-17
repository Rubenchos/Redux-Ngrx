import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from './counter/counter.actions';
import { AppState } from './counter/app.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redux-app';
  counter!: number;

  /**
   *
   */
  constructor(private store: Store<AppState>) {
    this.store.select('counter').subscribe(counter => {
      this.counter = counter;
    });
  }

  increase() {
    this.store.dispatch(actions.increase());
  }

  decrease() {
    this.store.dispatch(actions.decrease());
  }
}
