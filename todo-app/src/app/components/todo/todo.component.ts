import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todos: string[] = [];
  newTodo: string = '';

  addTodo() {
    if (this.newTodo.trim() !== '') {
      this.todos.push(this.newTodo.trim());
      this.newTodo = '';
    }
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
