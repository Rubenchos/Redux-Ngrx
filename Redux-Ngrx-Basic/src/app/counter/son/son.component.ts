import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import * as actions from '../counter.actions';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css']
})
export class SonComponent implements OnInit {
  counter!: number;
  constructor(
    private store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.store.select('counter').subscribe(counter => {
      this.counter = counter;
    });

  }

  number = {
    numero: 2
  }

  multiplication() {
    this.store.dispatch(actions.multiplication(this.number));
  }

  division() {
    this.store.dispatch(actions.division(this.number));
  }

}
