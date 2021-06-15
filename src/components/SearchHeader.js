import React from "react";
import { View, Button, Text } from "react-native";
import styled from "styled-components";

const SearchHeader = ({ navigation, destination }) => {
	return (
		<SearchHeaderStyle>
			<InputContainer>
				<Magnifier>O</Magnifier>
				<Input placeholder="Search for items or members" />
			</InputContainer>
		</SearchHeaderStyle>
	);
};

// Styles
const SearchHeaderStyle = styled.View`
	background-color: white;
	border-bottom-width: 2px;
	border-color: #ececec;
	height: 85px;
`;

const Magnifier = styled.Text`
	padding: 0 5px 0 5px;
	font-size: 16px;
`;

const Input = styled.TextInput`
	font-size: 16px;
	width: 100%;
`;

const InputContainer = styled.View`
	background-color: #f5f6f8;
	border-radius: 5px;
	margin: 35px 10px 0px 10px;
	padding: 5px;
	flex-direction: row;
	align-items: center;
`;

export default SearchHeader;
