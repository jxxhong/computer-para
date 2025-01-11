import { View, Text, Modal } from 'react-native';
import React from 'react';

export default function CItem(props) {
	return <Modal visible={props.visible}></Modal>;
}
