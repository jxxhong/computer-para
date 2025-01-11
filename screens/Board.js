import { View, Text, Pressable, FlatList, StyleSheet } from 'react-native';

export default function Board({ route }) {
	function itemPress(name) {
		console.log(name);
	}

	const Item = ({ item }) => {
		if (item.id === route.params.name)
			return item.list.map((a) => {
				return (
					<Pressable style={styles.item} onPress={() => itemPress(a.itemName)}>
						<View>
							{a.star ? (
								<Text>★ {a.itemName}</Text>
							) : (
								<Text>☆ {a.itemName}</Text>
							)}
						</View>
						<View>
							<Text>
								{a.price1} / {a.price2}
							</Text>
						</View>
					</Pressable>
				);
			});
	};

	return (
		<View>
			<View style={styles.navbar}>
				<View style={styles.textView}>
					<Text style={styles.mainText}>
						{route.params.name.toUpperCase()} 거래 게시판
					</Text>
				</View>
			</View>
			<View>
				<FlatList
					style={styles.itemList}
					data={itemList}
					renderItem={Item}
					keyExtractor={(item, index) => {
						return Math.random().toString();
					}}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	navbar: {
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',
		height: 60,
	},
	closeText: {
		flex: 1,
		width: '100%',
		height: '100%',
		fontSize: 30,
		textAlign: 'center',
	},
	textView: {
		flex: 9,
		width: '100%',
		height: '100%',
		alignItems: 'flex-start',
	},
	mainText: {
		textAlign: 'left',
		fontSize: 30,
		paddingVertical: 'auto',
		paddingTop: 5,
		paddingLeft: 10,
	},
	itemList: {
		width: '100%',
		borderWidth: 1,
		borderColor: '#dbdbdb',
		margin: 4,
		padding: 4,
	},
	item: {
		fontSize: 30,
		backgroundColor: '#dbdbdb',
		borderRadius: 6,
		padding: 4,
		height: 80,
	},
	itemText1: {},
	itemText2: {},
});

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
