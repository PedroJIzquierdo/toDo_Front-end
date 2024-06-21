import { Component, OnChanges, OnInit } from '@angular/core';
import { ITask } from 'src/app/models/task.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  taskList: ITask[] = []

  constructor(private _apiService: ApiService) { }

  ngOnInit(): void {
    this._apiService.getTask().subscribe((data: ITask[]) => {
      this.taskList = data;
    }
    );
  }

  deleteTask(index: number | undefined) {
    if (index) {
      this._apiService.deleteTask(index).subscribe((data) => {
        this._apiService.getTask().subscribe((data: ITask[]) => {
          this.taskList = data;
        }
        );
      });
    }
  }

  finishedTask(index: number | undefined) {
    if (index) {
      this._apiService.finishedTask(Number(index), this.taskList[index]).subscribe((data) => {
        this._apiService.getTask().subscribe((data: ITask[]) => {
          this.taskList = data;
        })
      });
    }

  }
}


