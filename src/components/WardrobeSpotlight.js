import React from "react";
import { useNavigation } from "@react-navigation/core";
import styled from "styled-components";

import MinItemCard from "../components/MinItemCard";
import SeeAll from "../components/SeeAll";

const WardrobeSpotlight = ({ destination, text }) => {
	const { navigate } = useNavigation();

	return (
		<Container onPress={() => navigate(destination)}>
			<GreySeparator />
			<Header>
				<HText>Wardrobe Spotlight</HText>
			</Header>
			<OPsProfile>
				<OneThirdCol>
					<OPsAvatar
						source={require("../images/basic_google_avatar_L.jpg")}
					/>
				</OneThirdCol>
				<TwoThirdCol>
					<OPsUsername>alexeasy1</OPsUsername>
					<Stars source={require("../images/5_stars.png")} />
				</TwoThirdCol>
				<ThreeThirdCol>
					<FollowButton>
						<FollowText>Follow</FollowText>
					</FollowButton>
				</ThreeThirdCol>
			</OPsProfile>
			<Items horizontal={true} showsHorizontalScrollIndicator={false}>
				<MinItemCard
					destination={"Home"}
					image={require("../images/some_dress.jpg")}
					price="30.00"
					favNum={10}
					sizes="M / 38 / 10"
					brand="Artigli"
				/>
				<MinItemCard
					destination={"Home"}
					image={require("../images/some_clothes.jpg")}
					price="4.00"
					favNum={12}
					sizes="S / 36 / 8"
					brand="H&M"
					minimal
				/>
				<MinItemCard
					destination={"Home"}
					image={require("../images/some_top.jpg")}
					price="5.99"
					favNum={9}
					sizes="M / 38 / 10"
					brand=""
				/>
				<MinItemCard
					destination={"Home"}
					image={require("../images/some_necklace.jpg")}
					price="4.00"
					favNum={14}
					sizes="One size"
					brand="Boutique indépendante"
				/>
				<SeeAll destination="Popular" items={104} />
			</Items>
			<Header>
				<SeeMore>See more</SeeMore>
			</Header>
			<GreySeparator />
		</Container>
	);
};

// Styles
const Container = styled.View``;

const GreySeparator = styled.View`
	/* It's probably cheating but whatever */
	padding: 15px;
	background-color: #f5f6f8;
`;

const Header = styled.View`
	height: 70px;
	justify-content: center;
`;

const HText = styled.Text`
	text-align: center;
	font-size: 16px;
`;

const OPsProfile = styled.View`
	flex-direction: row;
	align-items: center;
	padding: 10px;
`;

const OPsAvatar = styled.Image`
	border-radius: 50px;
	margin: 0 8px 0 8px;
	height: 35px;
	width: 35px;
`;

const OPsUsername = styled.Text`
	color: black;
	font-size: 14px;
	margin-bottom: -5px;
`;

const Stars = styled.Image`
	width: 90px;
	resize-mode: contain;
`;

const FollowButton = styled.TouchableOpacity`
	justify-content: center;
	border-width: 1.5px;
	border-radius: 7px;
	border-color: #39b2bd;
	height: 35px;
	width: 75px;
`;

const FollowText = styled.Text`
	text-align: center;
	color: #39b2bd;
	font-size: 14px;
`;

const OneThirdCol = styled.View`
	/*  */
`;
const TwoThirdCol = styled.View`
	/*  */
`;
const ThreeThirdCol = styled.View`
	flex-direction: row;
	flex: 1;
	justify-content: flex-end;
`;

const Items = styled.ScrollView`
	padding: 15px 18px 10px 18px;
`;

const SeeMore = styled.Text`
	text-align: center;
	color: #39b2bd;
	font-size: 16px;
`;

export default WardrobeSpotlight;
