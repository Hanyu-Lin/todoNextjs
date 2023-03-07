export interface Task {
  id: string;
  name: string | null;
  completed: boolean;
  projectId: string;
}
