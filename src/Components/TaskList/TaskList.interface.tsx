export interface TaskListProps {
  tasks: any;
  loading: boolean;
  updateText: (text: string) => void;
  updateCheck: (done: any[], day: string) => void;
}
