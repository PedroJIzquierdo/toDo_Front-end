import { Component, inject } from '@angular/core';
import { ApiService } from './services/api.service';
import { ITask } from './models/task.model';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To Do';
  menuSelect: String = '';
  onOption(menuSelect: String){
    this.menuSelect = menuSelect;

  }
}

