import React from "react";
import { View, Button, Text } from "react-native";
import styled from "styled-components";

import Footer from "../components/Footer";

const Search = ({ route, navigation }) => {
	const { initial } = route.params;

	return (
		<Container>
			<Footer initial={initial} />
		</Container>
	);
};

export default Search;

const Container = styled.View`
	background-color: white;
	flex: 1;
`;

const Scrollable = styled.ScrollView`
	/* padding: 15px 18px 10px 18px; */
`;
