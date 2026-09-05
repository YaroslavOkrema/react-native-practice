import { Check, Trash2 } from "lucide-react-native";
import { Pressable, StyleSheet, Text, View } from "react-native";

import type { TaskListProps } from "@/features/tasks/components/task-list/types";

export function TaskList({ tasks, onDeleteTask, onToggleTask }: TaskListProps) {
	return (
		<View style={styles.list}>
			{tasks.map((task) => (
				<View key={task.id} style={styles.taskItem}>
					<Pressable
						style={[styles.checkbox, task.completed && styles.checkedCheckbox]}
						accessibilityRole="checkbox"
						accessibilityLabel={`Позначити задачу як ${task.completed ? "невиконану" : "виконану"}: ${task.text}`}
						accessibilityState={{ checked: task.completed }}
						onPress={() => onToggleTask(task.id)}
					>
						{task.completed && (
							<Check size={16} color="#ffffff" strokeWidth={3} />
						)}
					</Pressable>

					<Text
						style={[
							styles.taskText,
							task.completed && styles.completedTaskText,
						]}
					>
						{task.text}
					</Text>

					<Pressable
						style={styles.deleteButton}
						accessibilityRole="button"
						accessibilityLabel={`Видалити задачу: ${task.text}`}
						onPress={() => onDeleteTask(task.id)}
					>
						<Trash2 size={16} color="red" />
					</Pressable>
				</View>
			))}
		</View>
	);
}

const styles = StyleSheet.create({
	list: {
		gap: 16,
	},
	taskItem: {
		flexDirection: "row",
		alignItems: "center",
		minHeight: 60,
		paddingHorizontal: 16,
		paddingVertical: 14,
		gap: 12,
		borderWidth: 1,
		borderColor: "#e4e4e7",
		borderRadius: 10,
		backgroundColor: "#ffffff",
	},
	taskText: {
		flex: 1,
		fontSize: 16,
		fontWeight: "500",
		color: "#18181b",
	},
	completedTaskText: {
		color: "#a1a1aa",
		textDecorationLine: "line-through",
	},
	checkbox: {
		width: 24,
		height: 24,
		alignItems: "center",
		justifyContent: "center",
		borderWidth: 2,
		borderColor: "#a1a1aa",
		borderRadius: 7,
	},
	checkedCheckbox: {
		borderColor: "#18181b",
		backgroundColor: "#18181b",
	},
	deleteButton: {
		width: 36,
		height: 36,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 8,
		backgroundColor: "#fafafa",
	},
});
