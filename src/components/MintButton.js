import React from "react";
import { useNavigation } from "@react-navigation/core";
import { View, Button, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";

const MintButton = ({ destination, text, version }) => {
	const { navigate } = useNavigation();
	if (version === "full") {
		return (
			<MintButtonStyle1 onPress={() => navigate(destination)}>
				<Text style={{ color: "white", fontSize: 16 }}>{text}</Text>
			</MintButtonStyle1>
		);
	} else if (version === "empty") {
		return (
			<MintButtonStyle2 onPress={() => navigate(destination)}>
				<Text style={{ color: "#39b2bd", fontSize: 16 }}>{text}</Text>
			</MintButtonStyle2>
		);
	} else {
		return console.error();
	}
};

// Styles
const MintButtonStyle1 = styled.TouchableOpacity`
	background-color: #39b2bd;
	border: 1px;
	border-color: #39b2bd;
	border-radius: 5px;
	align-items: center;
	padding: 10px;
	margin: 7px;
	width: 93%;
`;

const MintButtonStyle2 = styled.TouchableOpacity`
	background-color: transparent;
	border: 1px;
	border-color: #39b2bd;
	border-radius: 5px;
	align-items: center;
	padding: 10px;
	margin: 7px;
	width: 93%;
`;

export default MintButton;
