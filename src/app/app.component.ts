import { Component } from '@angular/core';
import { SayHelloService } from './services/sayHello.service';
import { Observable } from 'rxjs';
import { TodoModel } from './Dtos/todo.dto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngPlb291123';
  todos$: Observable<TodoModel[]>;
  constructor(private sayHelloService: SayHelloService) {
    this.todos$ = this.sayHelloService.getTodos();
  }
}
