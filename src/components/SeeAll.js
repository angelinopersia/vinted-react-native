import React from "react";
import styled from "styled-components";

const SeeAll = ({ items }) => {
	return (
		<Container>
			<Text>See all {items} items</Text>
		</Container>
	);
};

// Styles
const Container = styled.TouchableOpacity`
	justify-content: center;
	height: 280px;
	width: 140px;
	padding: 10px;
	margin: 5px 25px 0 0;
`;

const Text = styled.Text`
	text-align: center;
	color: #39b2bd;
	font-size: 17px;
`;

export default SeeAll;
