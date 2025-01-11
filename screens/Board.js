import { useState } from 'react';
import { View, Text, Pressable, FlatList, StyleSheet } from 'react-native';
import CItem from '../components/CItem';

export default function Board({ route }) {
	const [isOpen, setIsOpen] = useState(false);

	function itemPress() {
		setIsOpen(!isOpen);
	}

	const Item = ({ item }) => {
		return item[0].list.map((a) => {
			return (
				<Pressable style={styles.item} onPress={() => itemPress()}>
					<CItem visible={isOpen} />
					<View style={styles.itemUpper}>
						{a.star ? (
							<Text style={styles.itemText1}>★ {a.itemName}</Text>
						) : (
							<Text style={styles.itemText1}>☆ {a.itemName}</Text>
						)}
					</View>
					<View style={styles.itemLower}>
						<Text style={styles.itemText2}>
							{a.price1} / {a.price2}
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
						return Math.random().toString();
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
