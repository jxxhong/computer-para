import {
	View,
	Image,
	StyleSheet,
	ImageBackground,
	Pressable,
	Text,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Board from '../components/Board';
import { useState } from 'react';

export default function Main({ route }) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalName, setModalName] = useState('');

	function itemPress(item) {
		setModalName(item.id);
		setIsModalOpen(!isModalOpen);
	}
	function modalClose() {
		setIsModalOpen(!isModalOpen);
	}

	const Item = ({ item }) => {
		return (
			<Pressable onPress={() => itemPress(item)}>
				<Board visible={isModalOpen} close={modalClose} id={modalName} />
				{item.icon}
			</Pressable>
		);
	};

	return (
		<View style={styles.container}>
			<ImageBackground
				style={styles.backgroundImg}
				source={require('../assets/images/case.jpeg')}
				resizeMode="contain"
			>
				<Text style={styles.loginText}>{route.params.name}님 안녕하세요!</Text>
				<FlatList
					style={styles.buttonContainer}
					numColumns={2}
					data={itemData}
					renderItem={Item}
					keyExtractor={(item, index) => {
						return item.id;
					}}
				/>
			</ImageBackground>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#ffffff',
		width: '100%',
		flex: 2,
	},
	backgroundImg: {
		width: '100%',
		height: '100%',
	},
	loginText: {
		width: '100%',
		textAlign: 'center',
		fontSize: 30,
	},
	buttonContainer: {
		marginTop: 210,
		marginLeft: 70,
	},
	icon: {
		width: 100,
		height: 100,
	},
});

const itemData = [
	{
		icon: (
			<Image style={styles.icon} source={require('../assets/images/cpu.png')} />
		),
		id: 'cpu',
	},
	{
		icon: (
			<Image style={styles.icon} source={require('../assets/images/gpu.png')} />
		),
		id: 'gpu',
	},
	{
		icon: (
			<Image
				style={styles.icon}
				source={require('../assets/images/mainboard.png')}
			/>
		),
		id: 'mainboard',
	},
	{
		icon: (
			<Image style={styles.icon} source={require('../assets/images/ram.png')} />
		),
		id: 'ram',
	},
	{
		icon: (
			<Image style={styles.icon} source={require('../assets/images/ssd.png')} />
		),
		id: 'ssd',
	},
	{
		icon: (
			<Image
				style={styles.icon}
				source={require('../assets/images/cooler.png')}
			/>
		),
		id: 'cooler',
	},
];
