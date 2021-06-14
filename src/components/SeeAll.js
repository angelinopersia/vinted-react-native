import React from "react";
import { useNavigation } from "@react-navigation/core";
import { View, Button, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";

const SeeAll = ({ destination, text, version }) => {
	const { navigate } = useNavigation();

	return (
		<Container onPress={() => navigate(destination)}>
			<Text>See all popular items</Text>
		</Container>
	);
};

// Styles
const Container = styled.TouchableOpacity`
	/*  */
`;

export default SeeAll;
