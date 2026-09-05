import type { Task } from "@/features/tasks/types";

export function toggleTaskCompletion(tasks: Task[], taskId: number): Task[] {
	return tasks.map((task) => {
		if (task.id !== taskId) {
			return task;
		}

		return {
			...task,
			completed: !task.completed,
		};
	});
}

export function countCompletedTasks(tasks: Task[]): number {
	return tasks.filter((task) => task.completed).length;
}
