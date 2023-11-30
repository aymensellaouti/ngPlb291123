import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv/cv/cv.component';
import { TodoComponent } from './todo/component/todo/todo.component';
import { FirstComponent } from './components/first/first.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { ColorComponent } from './components/color/color.component';
import { SecondComponent } from './components/second/second.component';
import { NF404Component } from './components/nf404/nf404.component';

// todo
const routes: Routes = [
  {path: '', component: FirstComponent},
  {path: 'cv', component: CvComponent},
  {path: 'todo', component: TodoComponent},
  {path: 'word', component: MiniWordComponent},
  {path: 'color', component: ColorComponent},
  {path: ':qqechose', component: SecondComponent},
  {path: '**', component: NF404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
