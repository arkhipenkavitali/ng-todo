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
  @Output() toggle = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  onToggle(event: MouseEvent, id: number){
    console.log(event)
    event.preventDefault();
    this.toggle.emit(id);
  }

  onDelete(id: number){
    this.delete.emit(id);
  }

}
