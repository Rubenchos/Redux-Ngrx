import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../to-do.actions';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {

  @Input() itemTodo!: Todo;
  @ViewChild('fisicInput') fisicInput!: ElementRef
  isChkCompleted!: FormControl;
  txtInput!: FormControl;
  isEditing!: boolean;

  constructor(private store: Store<AppState>) {


  }

  ngOnInit(): void {
    this.isChkCompleted = new FormControl(this.itemTodo.isCompleted);
    this.txtInput = new FormControl(this.itemTodo.text, Validators.required);

    this.isChkCompleted.valueChanges.subscribe(value => {
      this.store.dispatch(actions.isTodoCompleted({ id: this.itemTodo.id }));
    });
  }

  editInput() {
    this.isEditing = true;
    this.txtInput.setValue(this.itemTodo.text);
    //Set Time neccesary to show the select in the input
    setTimeout(() => {
      this.fisicInput.nativeElement.select();
    }, 1);
  }

  finishEdit() {
    this.isEditing = false;
    if (this.txtInput.invalid || this.txtInput.value === this.itemTodo.text) {
      return;
    }

    this.store.dispatch(actions.editToDo({ id: this.itemTodo.id, text: this.txtInput.value }));
  }

  deleteToDo() {
    this.store.dispatch(actions.deleteToDo({ id: this.itemTodo.id }));
  }

}
