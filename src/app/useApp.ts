import { useState } from "react";
import type { Task } from "@/app/types";

export function useApp() {
	const [inputValue, setInputValue] = useState<string>("");

	const [tasks, setTasks] = useState<Task[]>([]);

	function changeText(text: string) {
		setInputValue(text);
	}

	function addTasks() {
		if (inputValue.trim() === "") {
			return;
		}

		const newTask = {
			id: Date.now(),
			text: inputValue,
		};

		setTasks([...tasks, newTask]);
		setInputValue("");
	}

	function deleteTask(id: number) {
		setTasks(tasks.filter((task) => task.id !== id));
	}

	return { inputValue, tasks, addTasks, deleteTask, changeText };
}
