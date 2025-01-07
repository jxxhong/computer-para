import { useState } from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	View,
	Modal,
	Pressable,
} from 'react-native';

function Login(props) {
	const [idValue, setIdValue] = useState('');
	const [pwValue, setPwValue] = useState('');

	return (
		<Modal visible={props.visible} animationType="slide">
			<View style={styles.container}>
				<View>
					<Text>ID</Text>
					<TextInput
						style={styles.textInput}
						value={idValue}
						onChangeText={setIdValue}
					/>
				</View>
				<View>
					<Text>PW</Text>
					<TextInput
						style={styles.textInput}
						value={pwValue}
						onChangeText={setPwValue}
					/>
				</View>
				<View style={styles.buttonContainer}>
					<Pressable style={styles.button}>
						<Text style={styles.buttonText}>로그인</Text>
					</Pressable>
					<Pressable style={styles.button} onPress={props.modalClose}>
						<Text style={styles.buttonText}>취소</Text>
					</Pressable>
				</View>
			</View>
		</Modal>
	);
}

export default Login;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 16,
		backgroundColor: '#ffe32b',
	},
	textInput: {
		borderWidth: 1,
		borderColor: '#e4d0ff',
		backgroundColor: '#e4d0ff',
		color: '#120438',
		borderRadius: 6,
		width: 300,
		padding: 16,
	},
	buttonContainer: {
		marginTop: 16,
		flexDirection: 'row',
		justifyContent: 'center',
	},
	button: {
		width: 100,
		marginHorizontal: 8,
		backgroundColor: '#e4d0ff',
		borderRadius: 6,
	},
	buttonText: {
		textAlign: 'center',
	},
});
