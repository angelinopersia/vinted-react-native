import React from "react";
import { useNavigation } from "@react-navigation/core";
import styled from "styled-components";

const Suggested = ({ title, viewNum }) => {
	return (
		<Container>
			<BrandTitle>{title}</BrandTitle>
			<ViewNumber>{viewNum}</ViewNumber>
		</Container>
	);
};

// Styles
const Container = styled.TouchableOpacity`
	flex-direction: column;
	justify-content: space-between;
	border-width: 1px;
	border-color: #ecedef;
	border-radius: 6px;
	width: 170px;
	padding: 15px 15px 15px 15px;
	margin: 5px;
`;

const BrandTitle = styled.Text`
	font-size: 17px;
`;

const ViewNumber = styled.Text`
	font-size: 17px;
	color: #666666;
`;

export default Suggested;
