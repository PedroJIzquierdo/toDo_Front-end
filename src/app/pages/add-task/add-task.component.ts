import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ITask } from 'src/app/models/task.model';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  addTask: FormGroup;
  taskList: ITask[] = [];

  constructor(
    private fb: FormBuilder,
    private _apiService: ApiService
  ) {
    this.addTask = this.fb.group({
      tittle: ['', Validators.required],
      description: ['', Validators.required],
      eta: ['', Validators.required]

    });
  }

  onSubmit() {
    console.log(this.addTask);
    const formValue: ITask = this.addTask.value;
    const taskRequest: ITask = {
      description: formValue?.description,
      eta: formValue?.eta,
      tittle: formValue?.tittle,
    };
    this._apiService.CreateTask(taskRequest).subscribe((data) => {
      this._apiService.getTask().subscribe((data: ITask[]) => {
        this.taskList = data;
      }
      );
    });
    
  }
}







