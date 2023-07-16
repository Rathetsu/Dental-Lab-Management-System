import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const NewDentistForm = () => {
	const [name, setName] = useState('');
	const [clinic, setClinic] = useState('');
	const [address, setAddress] = useState('');
	const [dentistID, setDentistID] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');

	const handleSubmit = () => {
		// form submission logic
	};

	const goBack = () => {
		// navigation logic
	};

	return (
		<View style={styles.container}>
			<Text style={styles.header}>New Dentist Registration</Text>

			<TextInput
				style={styles.input}
				placeholder="Dentist Name"
				onChangeText={text => setName(text)}
				value={name}
			/>
			<TextInput
				style={styles.input}
				placeholder="Clinic Name"
				onChangeText={text => setClinic(text)}
				value={clinic}
			/>
			<TextInput
				style={styles.input}
				placeholder="Address"
				onChangeText={text => setAddress(text)}
				value={address}
			/>
			<TextInput
				style={styles.input}
				placeholder="Dentist ID"
				onChangeText={text => setDentistID(text)}
				value={dentistID}
			/>
			<TextInput
				style={styles.input}
				placeholder="Email"
				onChangeText={text => setEmail(text)}
				value={email}
			/>
			<TextInput
				style={styles.input}
				placeholder="Phone"
				onChangeText={text => setPhone(text)}
				value={phone}
			/>

			{/* Buttons are to be replaced by custom buttons */}
			<Button title="Submit" onPress={handleSubmit} />
			<Button title="Cancel" onPress={goBack} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		padding: 16,
	},
	header: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 24,
	},
	input: {
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		marginBottom: 16,
		paddingLeft: 8,
	},
});

export default NewDentistForm;
