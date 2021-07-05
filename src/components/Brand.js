import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Text } from "react-native";
import styled from "styled-components";

const Brand = ({ destination, text }) => {
	const { navigate } = useNavigation();

	return (
		<Container>
			<Text>{text}</Text>
		</Container>
	);
};

// Styles
const Container = styled.TouchableOpacity`
	border-width: 1px;
	border-color: #ecedef;
	border-radius: 6px;
	padding: 10px;
	margin: 4px;
`;

export default Brand;
