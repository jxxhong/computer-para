import {
	Modal,
	View,
	Text,
	Pressable,
	StyleSheet,
	FlatList,
} from 'react-native';

export default function Board(props) {
	function itemPress(name) {
		console.log(name);
	}

	const Item = ({ item }) => {
		if (item.id === props.id)
			return item.list.map((a) => {
				return (
					<Pressable style={styles.item} onPress={() => itemPress(a.itemName)}>
						<View>
							<Text>{a.itemName}</Text>
							<Text>
								{a.price1} / {a.price2}
							</Text>
						</View>
					</Pressable>
				);
			});
	};

	return (
		<Modal visible={props.visible} animationType="slide">
			<View style={styles.navbar}>
				<Pressable style={styles.closeBtn} onPress={props.close}>
					<Text style={styles.closeText}>X</Text>
				</Pressable>
				<View style={styles.textView}>
					<Text style={styles.mainText}>{props.id}</Text>
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
		</Modal>
	);
}

const styles = StyleSheet.create({
	navbar: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',
		height: 60,
	},
	closeBtn: {
		flex: 1,
		width: '100%',
		height: '100%',
		padding: 10,
		borderWidth: 1,
		borderColor: '#000000',
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
	},
	item: {
		fontSize: 30,
		backgroundColor: '#dbdbdb',
		borderRadius: 6,
		margin: 10,
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
