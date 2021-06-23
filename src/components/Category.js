import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Text } from "react-native";
import styled from "styled-components";

const Category = ({ destination, image, title }) => {
	const { navigate } = useNavigation();
	return (
		<Container onPress={() => navigate(destination)}>
			<CategoryStyle>
				<CatPic source={image} />
			</CategoryStyle>
			<Text>{title}</Text>
		</Container>
	);
};

const Container = styled.TouchableOpacity`
	align-items: center;
`;

const CategoryStyle = styled.View`
	background-color: #f5f6f8;
	border-radius: 50px;
	align-items: center;
	justify-content: center;
	padding: 10px;
	margin: 7px;
	width: 75px;
	height: 75px;
`;

const CatPic = styled.Image`
	width: 25px;
	height: 25px;
	resize-mode: contain;
`;

export default Category;
