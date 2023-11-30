import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

// @Injectable permet de dire à l'injecteur
// de venire faire un tour et de nous fournir
// les dépendances qui nous sont nécessaires
@Injectable({
  // providedIn c'est pour avoir du lazy loading
  // L'instance ne sera crée que si on en a besoin
  providedIn: 'root'
})
export class SayHelloService {

  constructor(private loggerService: LoggerService) { }

  hello(): void {
    this.loggerService.logger('Hello');
  }
}
