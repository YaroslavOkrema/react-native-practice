import { Trash2 } from "lucide-react-native";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

type Task = {
	id: number;
	text: string;
};

export default function HomeScreen() {
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

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Мої задачі</Text>

			<TextInput
				value={inputValue}
				style={styles.input}
				placeholder="Введіть задачу"
				onChangeText={changeText}
			/>

			{tasks.map((task) => (
				<View style={styles.taskItem} key={task.id}>
					<Text>{task.text}</Text>

					<Pressable onPress={() => deleteTask(task.id)}>
						<Text>
							<Trash2 size={16} color="red" />
						</Text>
					</Pressable>
				</View>
			))}

			<Pressable style={styles.button} onPress={addTasks}>
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
