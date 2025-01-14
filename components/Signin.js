import { useState } from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	View,
	Modal,
	Pressable,
} from 'react-native';

function Signin(props) {
	const [nameValue, setNameValue] = useState('');
	const [idValue, setIdValue] = useState('');
	const [pwValue, setPwValue] = useState('');

	function nameInputHandler(name) {
		setNameValue(name);
	}
	function idInputHandler(id) {
		setIdValue(id);
	}
	function pwInputHandler(pw) {
		setPwValue(pw);
	}

	function signInProcess() {
		let userInfo = { name: nameValue, id: idValue, pw: pwValue };
		props.signIn(userInfo);
		props.modalClose();
	}

	return (
		<Modal visible={props.visible} animationType="slide">
			<View style={styles.container}>
				<View>
					<Text>이름</Text>
					<TextInput
						style={styles.textInput}
						value={nameValue}
						onChangeText={nameInputHandler}
					/>
				</View>
				<View>
					<Text>ID</Text>
					<TextInput
						style={styles.textInput}
						value={idValue}
						onChangeText={idInputHandler}
					/>
				</View>
				<View>
					<Text>PW</Text>
					<TextInput
						style={styles.textInput}
						value={pwValue}
						onChangeText={pwInputHandler}
					/>
				</View>
				<View style={styles.buttonContainer}>
					<Pressable style={styles.button} onPress={signInProcess}>
						<Text style={styles.buttonText}>회원가입</Text>
					</Pressable>
					<Pressable style={styles.button} onPress={props.modalClose}>
						<Text style={styles.buttonText}>취소</Text>
					</Pressable>
				</View>
			</View>
		</Modal>
	);
}

export default Signin;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 16,
		backgroundColor: '#0A84ff',
	},
	textInput: {
		borderWidth: 1,
		backgroundColor: '#ffffff',
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
		height: 20,
		marginHorizontal: 8,
		backgroundColor: '#ffffff',
		borderRadius: 6,
	},
	buttonText: {
		textAlign: 'center',
	},
});
