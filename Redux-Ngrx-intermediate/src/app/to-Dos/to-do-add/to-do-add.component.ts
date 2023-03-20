import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../to-do.actions';

@Component({
  selector: 'app-to-do-add',
  templateUrl: './to-do-add.component.html',
  styleUrls: ['./to-do-add.component.css']
})
export class ToDoAddComponent implements OnInit {

  txtInput: FormControl;

  constructor(private store: Store<AppState>) {
    this.txtInput = new FormControl('StartControl', Validators.required)

  }

  ngOnInit(): void {
  }

  addTodo() {
    if (this.txtInput.invalid) {
      return;
    }
    this.store.dispatch(actions.createToDo({ text: this.txtInput.value }));
    this.txtInput.reset();
  }

}
