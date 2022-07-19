import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {TODO_REDUCER_NODE, todoReducer} from "./store/todo/todo.reducer";
import { TodoPageComponent } from './page/todo-page/todo-page.component';
import {RouterModule} from "@angular/router";
import { TodoWidgetComponent } from './widget/todo-widget/todo-widget.component';
import { TodoCreateFormComponent } from './ui/todo-create-form/todo-create-form.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    TodoPageComponent,
    TodoWidgetComponent,
    TodoCreateFormComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(TODO_REDUCER_NODE, todoReducer),
    RouterModule.forChild([
      {
        path: '',
        component: TodoPageComponent
      }
    ]),
    FormsModule
  ]
})
export class TodoModule { }
