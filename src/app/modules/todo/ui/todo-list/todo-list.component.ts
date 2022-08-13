import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from "../../model/todo";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  editIds: number[] = []

  @Input() todoList: Todo[] | null = []
  @Output() delete = new EventEmitter<number>()
  @Output() toggle = new EventEmitter<number>()
  @Output() edit = new EventEmitter<{id: number, name: string}>()

  constructor() { }

  ngOnInit(): void {
  }

  onToggle( id: number){
    this.toggle.emit(id);
  }

  onDelete(id: number){
    this.delete.emit(id);
  }

  onEdit(name: string, id: number){
    this.editIds = this.editIds.filter(item => item !== id)
    this.edit.emit({id, name})
  }

  onCancel(id: number){
    this.editIds = this.editIds.filter(item => item !== id)
  }

  onEditMode(id: number){
    this.editIds.push(id)
  }

}
