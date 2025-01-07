import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
	return (
		<View style={styles.container}>
			<TextInput placeholder="input your goals" style={styles.textInput} />
			<View style={styles.buttonContainer}>
				<View style={styles.button}>
					<Button title="add goals" color="#b180f0" />
				</View>
				<View style={styles.button}>
					<Button title="cancle" color="#f31282" />
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 16,
		backgroundColor: '#311b6b',
	},
	image: {
		width: 100,
		height: 100,
		margin: 20,
	},
	textInput: {
		borderWidth: 1,
		borderColor: '#e4d0ff',
		backgroundColor: '#e4d0ff',
		color: '#120438',
		borderRadius: 6,
		width: '100%',
		padding: 16,
	},
	buttonContainer: {
		marginTop: 16,
		flexDirection: 'row',
	},
	button: {
		width: 100,
		marginHorizontal: 8,
	},
});
