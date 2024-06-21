import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITask } from '../models/task.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseURL: string = "http://localhost:8080/tasks";

  constructor(private _httpClient: HttpClient){}

  public getTask(): Observable <ITask[]>{
    return this._httpClient.get<ITask[]>(`${this.baseURL}`);
  }

 public deleteTask(id: number): Observable<ITask>{
  return this._httpClient.delete<ITask>(`${this.baseURL}/delete/${id}`);
  }

  public finishedTask (id: number, task: ITask): Observable<ITask>{
    return this._httpClient.patch<ITask>(`${this.baseURL}/${id}`, task);
  }

  public CreateTask (task: ITask): Observable <ITask>{
    return this._httpClient.post<ITask>(`${this.baseURL}`,task);
  }
  
}