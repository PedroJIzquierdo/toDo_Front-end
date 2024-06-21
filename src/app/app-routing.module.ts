import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './pages/task/task.component';
import { AddTaskComponent } from './pages/add-task/add-task.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: 'task', component: TaskComponent},
  {path: 'create', component: AddTaskComponent},
  {path: '**', redirectTo: '', pathMatch: 'full', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
