import { Component, OnInit } from '@angular/core';
import { Todo } from '../../model/todo';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  todos: Todo[];
  constructor() {
    this.todos = [
      {
        id: 1,
        title: 'Title',
        description: 'description',
        completed: false,
      },
      {
        id: 2,
        title: 'Title 2',
        description: 'description',
        completed: true,
      },
      {
        id: 3,
        title: 'Title 3',
        description: 'description 3',
        completed: false,
      },
    ];
  }

  ngOnInit(): void {}

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter((e) => e.id != todo.id);
  }
  completeTodo(todo: Todo) {
    this.todos.forEach((t) => {
      if (t.id == todo.id) {
        t.completed = true;
      }
    });
  }
}
