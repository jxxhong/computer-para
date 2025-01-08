import { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import Login from '../components/Login';
import Signin from '../components/Signin';

export default function Start({ navigation }) {
	const [isLoginModalOpen, setLoginModalOpen] = useState(false);
	const [isSigninModalOpen, setSigninModalOpen] = useState(false);
	const [userInfo, setUserInfo] = useState([]);

	function loginModalOpen() {
		setLoginModalOpen(!isLoginModalOpen);
	}
	function signinModalOpen() {
		setSigninModalOpen(!isSigninModalOpen);
	}
	function addUser(userData) {
		let info = [userInfo];
		info = [...info, userData];
		setUserInfo(info);
	}
	function userChecked(name) {
		setLoginModalOpen(!isLoginModalOpen);
		navigation.navigate('Main', { name: name });
	}

	return (
		<View style={styles.container}>
			<Image
				style={styles.image}
				source={require('../assets/images/image.png')}
			/>
			<Text style={styles.mainText}>컴터파라</Text>
			<View style={styles.mainButtons}>
				<Pressable style={styles.button} onPress={loginModalOpen}>
					<Login
						visible={isLoginModalOpen}
						userInfo={userInfo}
						modalClose={loginModalOpen}
						userChecked={userChecked}
					/>
					<Text style={styles.buttonText}>login</Text>
				</Pressable>
				<Pressable style={styles.button} onPress={signinModalOpen}>
					<Signin
						visible={isSigninModalOpen}
						signIn={addUser}
						modalClose={signinModalOpen}
					/>
					<Text style={styles.buttonText}>signin</Text>
				</Pressable>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 300,
	},
	mainText: {
		fontSize: 50,
		textAlign: 'center',
	},
	image: {
		alignItems: 'center',
		justifyContent: 'center',
		height: 100,
		width: 100,
		marginLeft: 150,
	},
	mainButtons: {
		marginTop: 30,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
	},
	button: {
		width: 80,
		marginHorizontal: 10,
		borderWidth: 1,
		padding: 3,
		backgroundColor: '#f7fb21',
	},
	buttonText: {
		fontSize: 30,
		textAlign: 'center',
	},
});
