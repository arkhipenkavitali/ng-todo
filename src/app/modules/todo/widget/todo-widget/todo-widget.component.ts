import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {TodoState} from "../../store/todo/todo.reducer";
import {TodoCreateAction, TodoDeleteAction} from "../../store/todo/todo.actions";
import {Todo} from "../../model/todo";
import {todoListSelector} from "../../store/todo/todo.selectors";
import {Observable} from "rxjs";

@Component({
  selector: 'app-todo-widget',
  templateUrl: './todo-widget.component.html',
  styleUrls: ['./todo-widget.component.scss']
})
export class TodoWidgetComponent implements OnInit {
  todoList$: Observable<Todo[]> = this.store$.pipe(select(todoListSelector))

  constructor(private store$: Store<TodoState>) { }

  ngOnInit(): void {
  }

  todoDelete(id: number){
    this.store$.dispatch(new TodoDeleteAction({id: id}))
  }

  onCreateForm(name: string){
    this.store$.dispatch(new TodoCreateAction(name))
  }

}
