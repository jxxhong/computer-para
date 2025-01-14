import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Start from './screens/Start';
import Main from './screens/Main';
import Board from './screens/Board';
import Part from './screens/Part';
import Chatting from './screens/Chatting';
import Purchase from './screens/Purchase';

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Start">
				<Stack.Screen name="Start" component={Start} />
				<Stack.Screen name="Main" component={Main} />
				<Stack.Screen name="Board" component={Board} />
				<Stack.Screen name="Part" component={Part} />
				<Stack.Screen name="Chat" component={Chatting} />
				<Stack.Screen name="Purchase" component={Purchase} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
