import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';

export default function Board(props) {
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
});
