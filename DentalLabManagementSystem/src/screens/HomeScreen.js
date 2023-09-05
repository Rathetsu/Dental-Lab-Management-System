import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
	const navigation = useNavigation();

	return (
		<View>
			<Button
				title="New Dentist Registration"
				onPress={() => navigation.navigate('NewDentistForm')}
			/>
		</View>
	);
};

export default HomeScreen;
