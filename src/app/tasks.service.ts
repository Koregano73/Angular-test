import { Injectable } from '@angular/core';
import { Tasks } from './tasks';
import { Task } from './task';
@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks: Tasks = {
    todo: [
      {
        id: 1,
        type: 'todo',
        title: 'Finish this kanban board',
        description: 'Hurry and finish!',
      },
    ],
    inprogress: [
      {
        id: 2,
        type: 'inprogress',
        title: 'Need to Finish this kanban board',
        description: 'finishing!',
      },
    ],
    done: [
      {
        id: 3,
        type: 'done',
        title: 'finished todo section',
        description: 'it works!',
      },
    ],
  };

  clear() {
    this.tasks.done = [];
  }

  add(task: Partial<{ title: string; description: string }>): void {
    let t: any = {
      id: new Date(),
      type: 'todo',
      ...task,
    };
    this.tasks.todo.push(t);
  }

  delete(task: Task): void {
    let taskType = task.type;
    this.tasks[taskType] = this.tasks[taskType].filter(
      (t: Task) => t.id !== task.id
    );
  }

  modify(task: Task) {
    this.tasks[task.type] = this.tasks[task.type].filter(
      (t: Task) => t.id !== task.id
    );
    if (task.type === 'todo') {
      task.type = 'inprogress';
      this.tasks['inprogress'].push(task);
    } else {
      task.type = 'done';
      this.tasks['done'].push(task);
    }
  }
  constructor() {}
}
