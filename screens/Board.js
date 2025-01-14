import { useState } from 'react';
import {
	View,
	Text,
	Pressable,
	FlatList,
	StyleSheet,
	TextInput,
	Button,
} from 'react-native';
import Post from '../components/Post';

export default function Board({ navigation, route }) {
	const [keyword, setKeyword] = useState('');
	const [searchList, setSearchList] = useState([route.params.itemList[0][0]]);
	const [visible, setVisible] = useState(false);

	function searchKeyword(kwd) {
		setKeyword(kwd);
	}
	function search() {
		let arr = searchList[0];
		let newArr = arr.list.filter((a) => a.itemName.includes(keyword));

		setSearchList([{ list: newArr }]);
	}

	function itemPress(list) {
		navigation.navigate('Part', { info: list, name: route.params.userName });
	}

	function post() {
		setVisible(!visible);
	}

	function addList(star, itemName, price1, price2) {
		let originList = searchList[0].list;
		console.log(originList);
		let newList = [
			...originList,
			{
				itemName: itemName,
				price1: parseInt(price1),
				price2: parseInt(price2),
				star: star,
			},
		];

		setSearchList([{ list: newList }]);
		post();
	}

	const Item = ({ item }) => {
		return item.list.map((a) => {
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
		<View style={styles.container}>
			<Text style={styles.mainText}>
				{route.params.name.toUpperCase()} 거래 게시판
			</Text>
			<View style={styles.searchView}>
				<TextInput
					style={styles.searchContainer}
					value={keyword}
					onChangeText={searchKeyword}
				/>
				<Pressable style={styles.searchBtn} onPress={search}>
					<Text style={styles.searchBtnText}>검색</Text>
				</Pressable>
			</View>
			<View>
				<FlatList
					style={styles.itemList}
					data={searchList}
					renderItem={Item}
					keyExtractor={(item, index) => {
						return Math.random().toString() + index;
					}}
				/>
			</View>
			<Pressable style={styles.postBtn} onPress={post}>
				<Text style={styles.postText}>+</Text>
			</Pressable>
			<Post visible={visible} add={addList} close={post} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		position: 'relative',
	},
	mainText: {
		textAlign: 'left',
		fontSize: 30,
		paddingVertical: 'auto',
		paddingLeft: 10,
		paddingBottom: 5,
	},
	searchView: {
		alignItems: 'center',
		flexDirection: 'row',
	},
	searchContainer: {
		width: 200,
		borderWidth: 1,
		borderRadius: 6,
		borderColor: '#000000',
		backgroundColor: '#ffffff',
		paddingLeft: 6,
		alignSelf: 'center',
	},
	searchBtn: {
		width: 50,
		height: '100%',
		backgroundColor: '#0A84FF',
	},
	searchBtnText: {
		color: '#000000',
		textAlign: 'center',
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
	postBtn: {
		position: 'absolute',
		right: 10,
		bottom: 10,
		width: 30,
		height: 30,
		backgroundColor: '#08A4FF',
		borderRadius: 15,
	},
	postText: {
		fontSize: 20,
		textAlign: 'center',
	},
});
