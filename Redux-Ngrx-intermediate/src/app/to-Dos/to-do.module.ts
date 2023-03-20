import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoAddComponent } from './to-do-add/to-do-add.component';
import { ToDoFooterComponent } from './to-do-footer/to-do-footer.component';
import { ToDoItemComponent } from './to-do-item/to-do-item.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoPageComponent } from './to-do-page/to-do-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPipePipe } from './filter-pipe.pipe';



@NgModule({
  declarations: [
    ToDoAddComponent,
    ToDoFooterComponent,
    ToDoItemComponent,
    ToDoListComponent,
    ToDoPageComponent,
    FilterPipePipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ToDoPageComponent
  ]
})
export class ToDoModule { }
