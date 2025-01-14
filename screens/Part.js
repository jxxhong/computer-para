import { useState } from 'react';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';

export default function Part({ navigation, route }) {
	const [isMarked, setIsMarked] = useState(false);

	function partPress() {
		navigation.navigate('Chat', {
			info: route.params.info,
			name: route.params.name,
		});
	}
	function markPress() {
		setIsMarked(!isMarked);
	}

	return (
		<View>
			<View style={styles.partTitle}>
				<Text style={styles.titleText}>{route.params.info.itemName}</Text>
				<View style={styles.titleBtn}>
					<Text style={styles.star}>{route.params.info.star ? '★' : '☆'}</Text>
					<Pressable onPress={markPress}>
						{isMarked ? (
							<Image
								style={styles.markImg}
								source={require('../assets/images/mark.png')}
							/>
						) : (
							<Image
								style={styles.markImg}
								source={require('../assets/images/unmark.png')}
							/>
						)}
					</Pressable>
				</View>
			</View>
			<Text style={styles.priceView}>
				판매가 : {route.params.info.price1}만원 / 출고가 :
				{route.params.info.price2}만원
			</Text>
			<Pressable onPress={partPress} style={styles.partContainer}>
				<View style={styles.imgView}>
					<Image
						style={styles.img}
						source={require('../assets/images/rtx4080.jpg')}
						resizeMode="center"
					/>
				</View>
				<Text style={styles.partText}>
					3년 사용했고 전문가 인증도 받아 성능이 그대로에요 샀던 때랑 차이
					없습니다 대신 연식이 있어 싸게 팝니다~
				</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	partTitle: {
		top: 0,
		width: '95%',
		height: 50,
		backgroundColor: '#dbdbdb',
		margin: 10,
		alignSelf: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderRadius: 6,
	},
	titleText: {
		top: 10,
		fontSize: 25,
		marginLeft: 10,
	},
	titleBtn: {
		top: 10,
		width: 100,
		flexDirection: 'row',
	},
	star: {
		fontSize: 25,
	},
	markImg: {
		marginLeft: 20,
		width: 30,
		height: 30,
	},
	priceView: {
		textAlign: 'center',
		fontSize: 25,
	},
	partContainer: {
		top: 10,
		height: 600,
		alignItems: 'center',
		borderWidth: 1,
		borderColor: '#000000',
		margin: 30,
	},
	partText: { fontSize: 25, margin: 10 },
	imgView: {
		width: '95%',
		height: 250,
	},
	img: {
		alignSelf: 'center',
		width: '100%',
		height: '100%',
		margin: 5,
		top: 0,
	},
});
