import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

import { TaskList } from "@/features/tasks/components/task-list/task-list";
import { useTasks } from "@/features/tasks/use-tasks";

export function TasksScreen() {
	const { inputValue, tasks, changeInputValue, addTask, deleteTask } =
		useTasks();

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Мої задачі</Text>

			<TextInput
				value={inputValue}
				style={styles.input}
				placeholder="Введіть задачу"
				onChangeText={changeInputValue}
				onSubmitEditing={addTask}
				returnKeyType="done"
			/>

			<TaskList tasks={tasks} onDeleteTask={deleteTask} />

			<Pressable style={styles.button} onPress={addTask}>
				<Text style={styles.buttonText}>Додати задачу</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 70,
		paddingHorizontal: 20,
		gap: 16,
	},
	title: {
		fontSize: 30,
		fontWeight: "700",
		color: "#09090b",
	},
	input: {
		height: 48,
		paddingHorizontal: 14,
		borderWidth: 1,
		borderColor: "#e4e4e7",
		borderRadius: 10,
		backgroundColor: "#ffffff",
		color: "#09090b",
		fontSize: 16,
	},
	button: {
		height: 48,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#18181b",
		borderRadius: 10,
	},
	buttonText: {
		fontSize: 16,
		fontWeight: "600",
		color: "#ffffff",
	},
});
