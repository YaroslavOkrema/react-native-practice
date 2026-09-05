import type { Task } from "@/features/tasks/types";

export type TaskListProps = {
	tasks: Task[];
	onDeleteTask: (taskId: number) => void;
	onToggleTask: (taskId: number) => void;
};
