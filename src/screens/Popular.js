import React from "react";
import { View, Button, Text } from "react-native";
import styled from "styled-components";

import Footer from "../components/Footer";

const Popular = ({ navigation }) => {
	return (
		<Container>
			<Scrollable>
				<Text>Popular page</Text>
			</Scrollable>

			<Footer activePage="Home" />
		</Container>
	);
};

export default Popular;

const Container = styled.View`
	background-color: white;
	flex: 1;
`;

const Scrollable = styled.ScrollView`
	padding: 15px 18px 10px 18px;
`;
