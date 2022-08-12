import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from "../../model/todo";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() todoList: Todo[] | null = []
  @Output() delete = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  onToggle(event: MouseEvent){
    console.log(event)
  }

  onDelete(id: number){
    this.delete.emit(id);
  }

}
