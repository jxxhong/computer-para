import {
	View,
	Text,
	TextInput,
	Button,
	StyleSheet,
	Pressable,
	ScrollView,
} from 'react-native';
import React, { useState } from 'react';

export default function Chatting() {
	const [chat, setChat] = useState([]);
	const [sendChat, setSendChat] = useState('');
	const [turn, setTurn] = useState(true);

	let chatList = [];

	function textChange(text) {
		setSendChat(text);
	}

	function send() {
		let newChat = turn ? (
			<Text style={styles.myChat}>{sendChat}</Text>
		) : (
			<Text style={styles.sellerChat}>{sendChat}</Text>
		);
		setTurn(!turn);
		chatList.push(newChat);
		setChat([...chat, chatList]);
		setSendChat('');
	}

	return (
		<View>
			<View overScrollMode="always" style={styles.chatView}>
				{chat.map((a) => {
					return a;
				})}
			</View>
			<View style={styles.sendView}>
				<TextInput
					style={styles.sendContent}
					onChangeText={textChange}
					value={sendChat}
				/>
				<Button title="send" onPress={send} />
			</View>
			<Pressable style={styles.purchaseBtn}>
				<Text style={styles.purchaseText}>구매하기</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	chatView: {
		width: '90%',
		height: 500,
		borderWidth: 1,
		borderRadius: 6,
		borderColor: '#000000',
		backgroundColor: '#ffffff',
		alignSelf: 'center',
		marginTop: 50,
		marginBottom: 30,
		overflow: 'scroll',
	},
	myChat: {
		width: 200,
		backgroundColor: '#0A84ff',
		borderRadius: 6,
		fontSize: 30,
		alignSelf: 'flex-end',
		textAlign: 'right',
		margin: 6,
		padding: 6,
	},
	sellerChat: {
		width: 200,
		backgroundColor: '#dbdbdb',
		borderRadius: 6,
		fontSize: 30,
		margin: 6,
		padding: 6,
	},
	sendView: {
		flexDirection: 'row',
		justifyContent: 'center',
	},
	sendContent: {
		width: 300,
		borderWidth: 1,
		borderRadius: 6,
		borderColor: '#000000',
		backgroundColor: '#ffffff',
		paddingLeft: 6,
	},
	purchaseBtn: {
		marginTop: 30,
		alignSelf: 'center',
		backgroundColor: '#ff6d6d',
		padding: 6,
		borderRadius: 6,
	},
	purchaseText: {
		fontSize: 30,
	},
});
