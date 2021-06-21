import React from "react";
import { View, Button, Text } from "react-native";
import styled from "styled-components";

import Footer from "../components/Footer";

const Search = ({ navigation }) => {
	return (
		<Container>
			<Footer />
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
