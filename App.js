import { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import Login from './components/Login';

export default function App() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	function modalOpen() {
		setIsModalOpen(!isModalOpen);
	}

	return (
		<View style={styles.container}>
			<Image
				style={styles.image}
				source={require('../computer-para/assets/images/image.png')}
			/>
			<Text style={styles.mainText}>컴터파라</Text>
			<View style={styles.mainButtons}>
				<Pressable style={styles.button} onPress={modalOpen}>
					<Login visible={isModalOpen} modalClose={modalOpen} />
					<Text style={styles.buttonText}>login</Text>
				</Pressable>
				<Pressable style={styles.button}>
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
