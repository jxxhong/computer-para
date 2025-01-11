import {
	View,
	Image,
	StyleSheet,
	ImageBackground,
	Pressable,
	Text,
	FlatList,
} from 'react-native';

export default function Main({ navigation, route }) {
	function itemPress(item) {
		let ilist = itemList.filter((x) => x.id === item.id); //밑에 setList에 넣으니 list가 빈 배열 or 늦게 들어감
		navigation.navigate('Board', { name: item.id, itemList: [ilist] });
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

const itemList = [
	{
		id: 'gpu',
		list: [
			{ star: true, itemName: 'rtx 4080', price1: 900000, price2: 1200000 },
		],
	},
	{
		id: 'cpu',
		list: [
			{ star: false, itemName: 'i7-13900', price1: 800000, price2: 1200000 },
			{ star: false, itemName: 'i7-13900', price1: 800000, price2: 1200000 },
		],
	},
	{
		id: 'ram',
		list: [
			{
				star: false,
				itemName: 'samsung ddr4 16GB',
				price1: 150000,
				price2: 1200000,
			},
		],
	},
	{
		id: 'ssd',
		list: [
			{
				star: true,
				itemName: 'samsung m.2 1TB',
				price1: 320000,
				price2: 1200000,
			},
		],
	},
	{
		id: 'cooler',
		list: [{ star: false, itemName: 'cooler', price1: 30000, price2: 1200000 }],
	},
	{
		id: 'mainboard',
		list: [
			{ star: true, itemName: 'msi b450m', price1: 70000, price2: 1200000 },
		],
	},
];
