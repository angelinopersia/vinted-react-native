import React from "react";
import { View, Button, Text } from "react-native";
import styled from "styled-components";

import Footer from "../components/Footer";
import SearchHeader from "../components/SearchHeader";

const Search = ({ navigation }) => {
	return (
		<Container>
			<SearchHeader />
			<Scrollable>
				<Text>Search page</Text>
			</Scrollable>

			<Footer activePage="Search" />
		</Container>
	);
};

export default Search;

const Container = styled.View`
	background-color: white;
	flex: 1;
`;

const Scrollable = styled.ScrollView`
	padding: 15px 18px 10px 18px;
`;
