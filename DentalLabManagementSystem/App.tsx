/**
 * Dental Lab Management Mobile App
 *
 * @author Ahmed Ezzat
 */

import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme, StyleSheet } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

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
			<HomeScreen />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default App;

