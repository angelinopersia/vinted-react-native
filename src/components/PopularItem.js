import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import { View, Button, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";

const Category = ({ destination, image, title, price }) => {
	const [favorite, setFavorite] = useState(false);
	useEffect(() => {
		console.log(favorite);
	});

	const { navigate } = useNavigation();
	return (
		<Container>
			<PopularStyle>
				<ItemPic source={image} onPress={() => navigate(destination)} />
			</PopularStyle>
			<InfoContainer>
				<LeftSubContainer>
					<PriceText>€17.00</PriceText>
					<Sizes>XS / 34 / 6</Sizes>
					<Brand>SheInside</Brand>
				</LeftSubContainer>
				<RightSubContainer>
					{favorite === false ? (
						<TouchableOpacity
							onPress={() => setFavorite(!favorite)}
						>
							<Fav
								source={require("../images/favorite_heart_EMPTY.png")}
							/>
						</TouchableOpacity>
					) : (
						<TouchableOpacity
							onPress={() => setFavorite(!favorite)}
						>
							<Fav
								source={require("../images/favorite_heart_FULL.png")}
								onPress={() => setFavorite(!favorite)}
							/>
						</TouchableOpacity>
					)}
					<FavNumbers>10</FavNumbers>
				</RightSubContainer>
			</InfoContainer>
		</Container>
	);
};

const Container = styled.View`
	align-items: center;
`;

const PopularStyle = styled.TouchableOpacity`
	background-color: #f5f6f8;
	align-items: center;
	justify-content: center;
	padding: 10px;
	margin: 7px;
	width: 150px;
	height: 200px;
`;

const ItemPic = styled.Image`
	width: 25px;
	height: 25px;
	resize-mode: contain;
`;

const InfoContainer = styled.View`
	justify-content: space-between;
	flex-direction: row;
`;

const LeftSubContainer = styled.View`
	padding: 5px;
	width: 90px;
`;

const RightSubContainer = styled.View`
	padding: 5px;
	flex-direction: row;
	justify-content: flex-end;
	width: 60px;
`;

const PriceText = styled.Text`
	font-size: 16px;
`;

const Sizes = styled.Text`
	color: #999999;
`;

const Brand = styled.Text`
	color: #999999;
	/* font-size: 15px; */
`;

const Fav = styled.Image`
	width: 20px;
	height: 20px;
	margin: 2px;
	resize-mode: contain;
`;

const FavNumbers = styled.Text`
	color: #999999;
	font-size: 15px;
`;

// arrive on search page AND specific tab according to title
// No touchableopacity animation

export default Category;
