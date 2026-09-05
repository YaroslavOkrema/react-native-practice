import { useState } from "react";
import {
	countCompletedTasks,
	toggleTaskCompletion,
} from "@/features/tasks/helpers";
import type { Task } from "@/features/tasks/types";

export function useTasks() {
	const [inputValue, setInputValue] = useState("");
	const [tasks, setTasks] = useState<Task[]>([]);

	function changeInputValue(value: string) {
		setInputValue(value);
	}

	function addTask() {
		const taskText = inputValue.trim();

		if (!taskText) {
			return;
		}

		const newTask: Task = {
			id: Date.now(),
			text: taskText,
			completed: false,
		};

		setTasks((currentTasks) => [...currentTasks, newTask]);
		setInputValue("");
	}

	function deleteTask(taskId: number) {
		setTasks((currentTasks) =>
			currentTasks.filter((task) => task.id !== taskId),
		);
	}

	function toggleTask(taskId: number) {
		setTasks((currentTasks) => toggleTaskCompletion(currentTasks, taskId));
	}

	const completedTasksCount = countCompletedTasks(tasks);

	return {
		inputValue,
		tasks,
		completedTasksCount,
		changeInputValue,
		addTask,
		deleteTask,
		toggleTask,
	};
}
