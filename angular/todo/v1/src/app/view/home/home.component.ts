import { Component, OnInit } from '@angular/core';
import { TodosQueryService, UpsertMutationService,DeleteMutationService } from 'src/generated/graphql';
import { Todo } from '../../model/todo';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  todoObservable: Observable<any>;
  todos: Todo[];


  constructor(private TodosQueryService: TodosQueryService,
    private upsertMutationService: UpsertMutationService, private deleteMutationService:DeleteMutationService ) {
    
  }

  ngOnInit(): void {
    this.getTodos()
    
  this.todoObservable.pipe(tap(usersList => {
    usersList.push( [
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
    ]);
  }));
  this.todoObservable.subscribe(todos => {
      this.todos = todos as Todo[]
  })
  console.log(this.todos)
  }
   getTodos(){

    return this.todoObservable = this.TodosQueryService
    .watch({ arcql: '*' }, { fetchPolicy: 'network-only' })
    .valueChanges.pipe(map(result => result.data.find.edges));
  }
  
  addTodo(todo: Todo) {
    this.upsertMutationService.mutate({
      values: {
        Todos: [
          {
            title: todo.title,
            description:  todo.description,
            completed:  todo.completed,
          }
        ]
      }
    }).subscribe((rensponse:any) => {
      console.log(JSON.stringify(rensponse));
      this.getTodos()
    });
    console.log(this.todoObservable)
    console.log(this.todos.forEach((t) => {
        t.title
    }));
    
  }

  deleteTodo(todo: Todo) {
  
    this.deleteItem({
     variables: { arcql: `hypi.id = '${todo.id}'` },
    });
  }
  deleteItem(deleteItem:any){
  return this.deleteMutationService
  .mutate(

    deleteItem
  )
  }
  completeTodo(todo: Todo) {
    this.todos.forEach((t) => {
      if (t.id == todo.id) {
        t.completed = true;
      }
    });
  }
}
