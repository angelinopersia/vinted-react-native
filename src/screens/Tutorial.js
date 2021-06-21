import React from "react";
import { View, Button, Text } from "react-native";

const Tutorial = ({ navigation }) => {
	return (
		<View
			style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
		>
			<Button title="Skip" onPress={() => navigation.navigate("Main")} />
			<Text>Placeholder for the 3 pages</Text>
			<Button
				title="Upload"
				onPress={() => navigation.navigate("Sell")}
			/>
		</View>
	);
};

// Make so that you can't return to this page?

export default Tutorial;
