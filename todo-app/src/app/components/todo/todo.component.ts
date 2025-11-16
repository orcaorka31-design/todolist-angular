import { Component, OnInit } from '@angular/core';

export interface Todo {
  text: string;
  done: boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  newTodo: string = '';

  ngOnInit() {
    const saved = localStorage.getItem('todos');
    if (saved) {
      this.todos = JSON.parse(saved);
    }
  }

  addTodo() {
    if (this.newTodo.trim()) {
      this.todos.push({
        text: this.newTodo.trim(),
        done: false
      });
      this.newTodo = '';
      this.saveToLocalStorage();
    }
  }

  toggleDone(index: number) {
    this.todos[index].done = !this.todos[index].done;
    this.saveToLocalStorage();
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
