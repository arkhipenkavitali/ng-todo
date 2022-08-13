import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from "../../model/todo";

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent implements OnInit {
  @Input() todo!: Todo
  @Output() delete = new EventEmitter<number>()
  @Output() toggle = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  onToggle(event: MouseEvent){
    console.log(event)
    event.preventDefault();
    this.toggle.emit();
  }

  onDelete(){
    this.delete.emit();
  }

}
