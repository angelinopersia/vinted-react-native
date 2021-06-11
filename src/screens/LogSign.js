import React from "react";
import { View, Button, Text } from "react-native";
import styled from "styled-components";

const LogSign = ({ navigation }) => {
	return (
		<View
			style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
		>
			<Text>Placeholder page for the popup</Text>
			<Button
				title="Continue with Facebook"
				onPress={() => navigation.navigate("SignUp")}
			/>
			<Button
				title="Continue with Google"
				onPress={() => navigation.navigate("LogIn")}
			/>
		</View>
	);
};

// Styles
// const Container = styled.view`
//     background-color: #f7f7f7;
// `;

// MODAL ?

export default LogSign;
