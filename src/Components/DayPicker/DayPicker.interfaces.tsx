export interface DayPickerProps {
  tasks: any;
  loading: boolean;
  updateName: (name: string) => void;
  updateCheck: (check: boolean) => void;
  updateDay: (day: string) => void;
}
