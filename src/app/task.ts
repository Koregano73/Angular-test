export interface Task {
  id: number | Date;
  type: 'todo' | 'inprogress' | 'done';
  title: string;
  description: string;
}
