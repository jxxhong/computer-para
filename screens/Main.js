import {
	View,
	Image,
	StyleSheet,
	ImageBackground,
	Pressable,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default function Main() {
	function itemPress(item) {
		console.log(item.id);
	}

	const Item = ({ item }) => {
		return <Pressable onPress={() => itemPress(item)}>{item.icon}</Pressable>;
	};

	return (
		<View style={styles.container}>
			<ImageBackground
				style={styles.backgroundImg}
				source={require('../assets/images/case.jpeg')}
				resizeMode="contain"
			>
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
		flex: 2,
	},
	backgroundImg: {
		width: '100%',
		height: '100%',
	},
	buttonContainer: {
		marginTop: 250,
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
				source={require('../assets/images/cooler.png')}
			/>
		),
		id: 'cooler',
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
				source={require('../assets/images/mainboard.png')}
			/>
		),
		id: 'mainboard',
	},
];
