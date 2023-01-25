import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TasksService } from './tasks.service';
import { Task } from './task';
import { Tasks } from './tasks';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  tasks!: Tasks;

  constructor(private taskService: TasksService) {}

  taskForm = new FormGroup({
    title: new FormControl('', {nonNullable: true}),
    description: new FormControl('', {nonNullable: true}),
  });

  clear(): void {
    this.taskService.clear();
    this.getTasks();
  }

  onSubmit(): void {
    let values = this.taskForm.value;
    this.taskService.add(values);
    this.taskForm.reset();
    this.getTasks();
  }

  getTasks(): void {
    this.tasks = this.taskService.tasks;
  }

  delete(id: Task): void {
    this.taskService.delete(id);
    this.getTasks();
  }

  modify(id: Task): void {
    this.taskService.modify(id);
    this.getTasks();
  }

  ngOnInit(): void {
    this.getTasks();
  }
}
