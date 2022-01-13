export interface TasksProps {
  tasks: any;
  currentDayTasks: () => [];
  update: (done: any[], day: string) => any;
}
