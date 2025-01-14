import { View, Text, Modal, Button, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';

export default function Post(props) {
	const [title, setTitle] = useState('제목을 입력하세요');
	const [content, setContent] = useState('내용을 입력하세요');
	const [price1, setPrice1] = useState('판매가를 입력하세요');
	const [price2, setPrice2] = useState('출고가를 입력하세요');

	function titleText(text) {
		setTitle(text);
	}
	function contentText(text) {
		setContent(text);
	}
	function price1Text(text) {
		setPrice1(text);
	}
	function price2Text(text) {
		setPrice2(text);
	}
	function postItem() {
		props.add(false, title, price1, price2);
	}

	return (
		<Modal visible={props.visible}>
			<View style={styles.container}>
				<View>
					<TextInput
						value={title}
						onChangeText={titleText}
						style={styles.title}
					/>
				</View>
				<View>
					<TextInput
						value={content}
						onChangeText={contentText}
						style={styles.content}
					/>
				</View>
				<View style={styles.price}>
					<TextInput
						value={price1}
						onChangeText={price1Text}
						style={styles.price2}
					/>
					<TextInput
						value={price2}
						onChangeText={price2Text}
						style={styles.price2}
					/>
				</View>
				<Button title="글 올리기" onPress={postItem} />
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	container: {
		top: 250,
	},
	title: {
		width: '90%',
		height: 40,
		borderWidth: 1,
		borderColor: '#000000',
		marginBottom: 10,
		alignSelf: 'center',
		borderRadius: 6,
		paddingLeft: 5,
	},
	content: {
		width: '90%',
		height: 200,
		borderWidth: 1,
		borderColor: '#000000',
		borderRadius: 6,
		marginBottom: 10,
		alignSelf: 'center',
		paddingLeft: 5,
	},
	price: {
		flexDirection: 'row',
		width: '90%',
		justifyContent: 'space-between',
		alignSelf: 'center',
		paddingLeft: 5,
	},
	price2: {
		width: '40%',
		borderWidth: 1,
		borderColor: '#000000',
		height: 40,
		marginHorizontal: 10,
		borderRadius: 6,
		paddingLeft: 5,
	},
});
