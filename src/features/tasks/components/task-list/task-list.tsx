import { Trash2 } from "lucide-react-native";
import { Pressable, StyleSheet, Text, View } from "react-native";

import type { TaskListProps } from "@/features/tasks/components/task-list/types";

export function TaskList({ tasks, onDeleteTask }: TaskListProps) {
	return (
		<View style={styles.list}>
			{tasks.map((task) => (
				<View key={task.id} style={styles.taskItem}>
					<Text style={styles.taskText}>{task.text}</Text>

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
		justifyContent: "space-between",
		minHeight: 60,
		paddingHorizontal: 16,
		paddingVertical: 14,
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
	deleteButton: {
		width: 36,
		height: 36,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 8,
		backgroundColor: "#fafafa",
	},
});
