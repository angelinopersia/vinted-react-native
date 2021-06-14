import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import { View, Button, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";

const Category = ({ destination, image, price, sizes, brand }) => {
	const [favorite, setFavorite] = useState(false);
	const [favCount, setFavCount] = useState();

	// useEffect(() => {
	// 	console.log(favorite);
	// });

	const { navigate } = useNavigation();
	return (
		<Container>
			<PopularStyle>
				<ItemPic source={image} onPress={() => navigate(destination)} />
			</PopularStyle>
			<InfoContainer>
				<TopContainer>
					<LeftSubContainer>
						<PriceText>{"€" + price}</PriceText>
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
				</TopContainer>
				<BottomContainer>
					<Sizes>{sizes}</Sizes>
					<Brand>{brand}</Brand>
				</BottomContainer>
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
	/*  */
`;

const TopContainer = styled.View`
	flex-direction: row;
	height: 30px;
`;

const BottomContainer = styled.View`
	margin-top: -5px;
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
	font-size: 15px;
`;

const Sizes = styled.Text`
	color: #999999;
	font-size: 12px;
	padding-left: 5px;
`;

const Brand = styled.Text`
	color: #999999;
	font-size: 12px;
	padding-left: 5px;
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
