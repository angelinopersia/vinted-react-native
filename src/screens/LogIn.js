import React from "react";
import { View } from "react-native";
import styled from "styled-components";
import MintButton from "../components/MintButton";

const LogIn = ({ navigation }) => {
	return (
		<Container>
			<InputContainer>
				<Input placeholder="Username or email" />
			</InputContainer>
			<InputContainer style={{ marginBottom: 35 }}>
				<Input placeholder="Password" />
			</InputContainer>
			<View style={{ alignItems: "center" }}>
				<MintButton
					navigation={navigation}
					destination={"Home"}
					text="Log in"
					version="full"
				/>
			</View>
		</Container>
	);
};

export default LogIn;

const Container = styled.View`
	background-color: white;
	flex: 1;
`;

const Input = styled.TextInput`
	font-size: 16px;
`;

const InputContainer = styled.View`
	margin: 15px;
	border-bottom-width: 1px;
	border-color: #39b2bd;
`;

// Hide pass
// Line length
// Underline change
// Fill in etc
// Forgotten your password?
// Having trouble?
