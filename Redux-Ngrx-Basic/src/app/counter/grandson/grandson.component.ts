import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import * as actions from '../counter.actions';

@Component({
  selector: 'app-grandson',
  templateUrl: './grandson.component.html',
  styleUrls: ['./grandson.component.css']
})
export class GrandsonComponent implements OnInit {

  counter!: number;

  constructor(private store: Store<AppState>) {

  }

  ngOnInit(): void {
    this.store.select('counter').subscribe(counter => {
      this.counter = counter;
    });
  }

  reset() {
    this.store.dispatch(actions.reset());
  }

}
