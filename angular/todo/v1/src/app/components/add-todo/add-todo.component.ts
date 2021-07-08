import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from '../../model/todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  public titleInvalid: boolean = false;
  @Output() addTodo: EventEmitter<Todo> = new EventEmitter();
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: [''],
    });
  }

  ngOnInit(): void {}

  async onSubmit() {
    this.titleInvalid = false;
    if (this.form.valid) {
      try {
        //Attempt Add Todo
        const title = this.form.controls['title'].value;
        const description = this.form.controls['description'].value;
        this.addTodo.emit({
          title: title,
          description: description,
          completed: false,
        });
      } catch (err) {}
    } else {
    }
  }
}
