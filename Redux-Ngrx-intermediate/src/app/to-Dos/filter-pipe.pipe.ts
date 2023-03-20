import { Pipe, PipeTransform } from '@angular/core';
import { validFilters } from '../filter/filter.actions';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filterTodoPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(todos: Todo[], filter: validFilters): Todo[] {
    switch (filter) {
      case 'completados':
        return todos.filter(todo => todo.isCompleted);
      case 'pendientes':
        return todos.filter(todo => !todo.isCompleted);
      default:
        return todos
    }
  }

}
