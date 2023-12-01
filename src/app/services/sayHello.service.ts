import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable, catchError, of, throwError } from 'rxjs';
import { TodoModel } from '../Dtos/todo.dto';
import { API } from '../config/api.config';

// @Injectable permet de dire à l'injecteur
// de venire faire un tour et de nous fournir
// les dépendances qui nous sont nécessaires
@Injectable({
  // providedIn c'est pour avoir du lazy loading
  // L'instance ne sera crée que si on en a besoin
  providedIn: 'root'
})
export class SayHelloService {

  constructor(
    private loggerService: LoggerService,
    private http: HttpClient
  ) { }

  hello(): void {
    this.loggerService.logger('Hello');
  }

  getTodos(): Observable<TodoModel[]> {
    return this.http.get<TodoModel[]>(API.todo).pipe(
      catchError(e => {
        // Ici vous faites ce que vous voulez
        // On veut pas déclancher d'erreurs
        return EMPTY;
        // data fictives
        return of([]);
        // si vous voulez throw
        return throwError(() => 'quelque chose');
      })
    );
  }
}
