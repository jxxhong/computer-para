import { View, Text, Pressable, FlatList, StyleSheet } from 'react-native';

export default function Board({ navigation, route }) {
	function itemPress(list) {
		navigation.navigate('Part', { info: list, name: route.params.userName });
	}

	const Item = ({ item }) => {
		return item[0].list.map((a) => {
			return (
				<Pressable style={styles.item} onPress={() => itemPress(a)}>
					<View style={styles.itemUpper}>
						{a.star ? (
							<Text style={styles.itemText1}>★ {a.itemName}</Text>
						) : (
							<Text style={styles.itemText1}>☆ {a.itemName}</Text>
						)}
					</View>
					<View style={styles.itemLower}>
						<Text style={styles.itemText2}>
							판매가 : {a.price1}만원 / 출고가 : {a.price2}만원
						</Text>
					</View>
				</Pressable>
			);
		});
	};

	return (
		<View>
			<Text style={styles.mainText}>
				{route.params.name.toUpperCase()} 거래 게시판
			</Text>
			<View>
				<FlatList
					style={styles.itemList}
					data={route.params.itemList}
					renderItem={Item}
					keyExtractor={(item, index) => {
						return item.price1 * Math.random().toString() + index;
					}}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	mainText: {
		textAlign: 'left',
		fontSize: 30,
		paddingVertical: 'auto',
		paddingLeft: 10,
		paddingBottom: 5,
	},
	itemList: {
		width: '98%',
		borderWidth: 1,
		borderColor: '#dbdbdb',
		margin: 4,
		padding: 4,
	},
	item: {
		backgroundColor: '#dbdbdb',
		borderRadius: 6,
		margin: 5,
		padding: 5,
		height: 80,
	},
	itemUpper: {
		height: '50%',
	},
	itemLower: {
		height: '50%',
	},
	itemText1: {
		fontSize: 30,
	},
	itemText2: {
		fontSize: 20,
		marginLeft: 35,
		color: '#ffffff',
	},
});
