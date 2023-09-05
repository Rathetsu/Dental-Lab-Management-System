/**
 * Dental Lab Management Mobile App
 *
 * @author Ahmed Ezzat
 */

import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import NewDentistForm from './src/screens/NewDentistForm';

const Stack = createStackNavigator();

const App = (): JSX.Element => {
	const isDarkMode = useColorScheme() === 'dark';

	const backgroundStyle = {
		backgroundColor: isDarkMode ? 'black' : 'white',
	};

	return (

		<SafeAreaView style={[backgroundStyle, styles.container]}>
			<StatusBar
				barStyle={isDarkMode ? 'light-content' : 'dark-content'}
				backgroundColor={backgroundStyle.backgroundColor}
			/>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name="Home" component={HomeScreen} />
					<Stack.Screen name="NewDentist" component={NewDentistForm} />
				</Stack.Navigator>
			</NavigationContainer>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default App;

