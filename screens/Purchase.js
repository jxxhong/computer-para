import { View, Text, StyleSheet, Pressable, Alert } from 'react-native';
import React, { useState } from 'react';

export default function Purchase({ navigation, route }) {
	const [select, setSelect] = useState([
		{ selected: true, name: '카카오페이 결제' },
		{ selected: false, name: '토스페이 결제' },
		{ selected: false, name: '계좌 이체' },
		{ selected: false, name: '신용카드 결제' },
	]);

	function buttonSelect(index) {
		let newState = [];
		select.map((x, i) => {
			if (i === index) newState.push({ selected: true, name: x.name });
			else newState.push({ selected: false, name: x.name });
		});
		setSelect(newState);
	}

	function toMain() {
		navigation.navigate('Main', { name: route.params.name });
	}

	function purchasePress() {
		Alert.alert('결제가 완료되었습니다.', '메인으로 돌아갑니다.', [
			{ text: 'OK', onPress: () => toMain() },
		]);
	}

	return (
		<View style={styles.Container}>
			<Text style={styles.itemTitle}>{route.params.info.itemName}</Text>
			<Text style={styles.itemPrice}>{route.params.info.price1}만원</Text>
			<View style={styles.selectList}>
				{select.map((a, i) => {
					return (
						<View style={styles.listItem}>
							{a.selected ? (
								<Pressable
									style={styles.buttonSelected}
									onPress={() => buttonSelect(i)}
									key={i}
								/>
							) : (
								<Pressable
									style={styles.buttonNonSelected}
									onPress={() => buttonSelect(i)}
									key={i}
								/>
							)}
							<Text style={styles.listName}>{a.name}</Text>
						</View>
					);
				})}
			</View>
			<Pressable onPress={purchasePress} style={styles.purchaseBtn}>
				<Text style={styles.purchaseText}>결제하기</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	Container: {
		width: '80%',
		height: '80%',
		marginTop: 50,
		alignSelf: 'center',
		backgroundColor: '#ffffff',
		borderWidth: 1,
		borderColor: '#000000',
	},
	itemTitle: {
		marginTop: 20,
		fontSize: 40,
		fontWeight: 700,
		textAlign: 'center',
	},
	itemPrice: {
		marginTop: 20,
		textAlign: 'center',
		fontSize: 30,
		fontWeight: 500,
	},
	selectList: {
		alignSelf: 'center',
	},
	listItem: {
		flexDirection: 'row',
		marginTop: 40,
	},
	buttonSelected: {
		width: 10,
		height: 10,
		borderWidth: 1,
		borderColor: '#000000',
		backgroundColor: '#000000',
		top: '30%',
		marginRight: 20,
	},
	buttonNonSelected: {
		width: 10,
		height: 10,
		borderWidth: 1,
		borderColor: '#000000',
		top: '30%',
		marginRight: 20,
	},
	listName: {
		fontSize: 20,
	},
	purchaseBtn: {
		marginTop: 30,
		alignSelf: 'center',
		backgroundColor: '#0A84FF',
		padding: 6,
		borderRadius: 6,
	},
	purchaseText: {
		fontSize: 30,
	},
});
