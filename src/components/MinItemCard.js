import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";

const MinItemCard = ({ destination, image, price, favNum, sizes, brand }) => {
	const [favorite, setFavorite] = useState(false);
	const [favCount, setFavCount] = useState(favNum);

	useEffect(() => {
		if (favorite === true) {
			setFavCount(favNum + 1);
		} else if (favorite === false) {
			setFavCount(favNum);
		}
	});

	const { navigate } = useNavigation();
	return (
		<Container>
			<CardStyle activeOpacity={1}>
				<ItemPic source={image} onPress={() => navigate(destination)} />
			</CardStyle>
			<InfoContainer>
				<TopContainer>
					<LeftSubContainer>
						<PriceText>{"€" + price}</PriceText>
					</LeftSubContainer>
					<RightSubContainer>
						{favorite === false ? (
							<TouchableOpacity
								activeOpacity={1}
								onPress={() => setFavorite(!favorite)}
							>
								<Fav
									source={require("../images/favorite_heart_EMPTY.png")}
								/>
							</TouchableOpacity>
						) : (
							<TouchableOpacity
								activeOpacity={1}
								onPress={() => setFavorite(!favorite)}
							>
								<Fav
									source={require("../images/favorite_heart_FULL.png")}
									onPress={() => setFavorite(!favorite)}
								/>
							</TouchableOpacity>
						)}
						<FavNumbers>{favCount}</FavNumbers>
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

const CardStyle = styled.TouchableOpacity`
	background-color: #f5f6f8;
	align-items: center;
	justify-content: center;
	padding: 10px;
	margin: 5px;
	width: 160px;
	height: 220px;
`;

const ItemPic = styled.Image`
	width: 160px;
	height: 220px;
	resize-mode: cover;
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
	width: 95px;
`;

const RightSubContainer = styled.View`
	padding: 5px;
	flex-direction: row;
	justify-content: flex-end;
	width: 65px;
`;

const PriceText = styled.Text`
	font-size: 14px;
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
	width: 18px;
	height: 18px;
	margin: 2px;
	resize-mode: contain;
`;

const FavNumbers = styled.Text`
	color: #999999;
	font-size: 14px;
`;

export default MinItemCard;
