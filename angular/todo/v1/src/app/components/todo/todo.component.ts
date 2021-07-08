import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Todo } from '../../model/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  @Output() completeTodo: EventEmitter<Todo> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  onToggle(todo: Todo) {
    // Toggle in UI
    todo.completed = !todo.completed;
    // Toggle on server
  }

  onDelete(todo: Todo) {
    this.deleteTodo.emit(todo);
    // Toggle on server
  }

  onComplete(todo: Todo) {
    this.completeTodo.emit(todo);
    // Toggle on server
  }
}
