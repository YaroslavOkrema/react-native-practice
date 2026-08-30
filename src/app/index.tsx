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
				<View key={task.id}>
					<Text>{task.text}</Text>
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
		paddingInline: 20,
		gap: 16,
	},

	title: {
		fontSize: 28,
		fontWeight: "600",
	},

	input: {
		padding: 8,
		borderWidth: 1,
		borderRadius: 8,
	},

	taskItem: {
		backgroundColor: "#e5e7eb",
		borderRadius: 8,
		padding: 16,
		borderWidth: 1,
	},

	button: {
		backgroundColor: "red",
		padding: 12,
		borderRadius: 8,
		alignItems: "center",
	},

	buttonText: {
		color: "white",
		textAlign: "center",
		fontWeight: "600",
	},
});
